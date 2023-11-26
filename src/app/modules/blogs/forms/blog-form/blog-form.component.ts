import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LanguagesEnum } from '../../../../shared/schema/languages.enum';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  BlogForm,
  BlogsLanguageForm,
  BlogTranslation,
  BlogWithTranslations,
} from '../../../../shared/schema/blog';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'],
})
export class BlogFormComponent implements OnInit {
  @Input() blog: BlogWithTranslations | null = null;

  @Output() submitEvent = new EventEmitter<BlogForm>();

  public readonly separatorKeysCodes = [ENTER, COMMA] as const;

  public blogForm = this.fb.group<BlogForm>({
    tags: this.fb.nonNullable.control([], {
      validators: [Validators.required, Validators.minLength(1)],
    }),
    blogs: this.fb.array<FormGroup<BlogsLanguageForm>>([], {
      validators: [Validators.required, Validators.minLength(1)],
    }),
  });

  public tags: string[] = [];

  public addOnBlur = true;

  protected readonly Languages = LanguagesEnum;

  constructor(
    public fb: FormBuilder,
    public router: Router,
  ) {}

  public ngOnInit() {
    if (this.blog) {
      this.blogForm.patchValue({
        tags: [...this.blog.tags],
      });
      this.tags = [...this.blog.tags];
      this.blog.translations.forEach((blog) => {
        this.addBlog(blog.language as LanguagesEnum, blog);
      });
    }
  }

  public get blogsFormArray(): FormArray<FormGroup<BlogsLanguageForm>> | null {
    return this.blogForm?.controls.blogs ?? null;
  }

  public addBlogLanguage(lang: LanguagesEnum): void {
    if (this.blogsFormArray?.controls.filter((blog) => blog.value.language === lang).length) {
      return;
    }
    this.addBlog(lang);
  }

  public removeBlog(index: number): void {
    this.blogsFormArray?.removeAt(index);
  }

  private addBlog(lang: LanguagesEnum = LanguagesEnum.EN, translation?: BlogTranslation): void {
    const initializedBlog = this.fb.group<BlogsLanguageForm>({
      title: this.fb.nonNullable.control(translation?.title ?? '', Validators.required),
      content: this.fb.nonNullable.control(translation?.content ?? '', Validators.required),
      language: this.fb.nonNullable.control(translation?.language ?? lang, Validators.required),
    });

    this.blogsFormArray?.push(initializedBlog);
  }

  public addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push(value);
    }

    event.chipInput?.clear();
  }

  public removeTag(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  public editTag(tag: string, event: MatChipEditedEvent): void {
    const value = event.value.trim();

    if (!value) {
      this.removeTag(tag);

      return;
    }

    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags[index] = value;
    }
  }

  public submitForm(): void {
    if (this.blogForm.invalid) {
      return;
    }

    this.blogForm.patchValue({
      tags: this.tags,
    });

    this.submitEvent.emit(this.blogForm.controls);
  }
}
