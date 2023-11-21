import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogForm, BlogsLanguageForm } from '../../../shared/schema/blog';
import { LanguagesEnum } from '../../../shared/schema/languages.enum';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { BlogsService } from '../../../shared/services/blogs.service';
import { Utils } from '../../../shared/tools/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss'],
})
export class CreateBlogComponent {
  public readonly separatorKeysCodes = [ENTER, COMMA] as const;

  public createBlogForm = this.fb.group<BlogForm>({
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
    public blogService: BlogsService,
    public router: Router,
  ) {}

  public get blogsFormArray(): FormArray<FormGroup<BlogsLanguageForm>> | null {
    return this.createBlogForm?.controls.blogs ?? null;
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

  public createBlog(): void {
    if (this.createBlogForm.valid) {
      this.createBlogForm.patchValue({
        tags: [...this.tags],
      });
      this.blogService
        .createBlog(Utils.mapCreateBlogRequest(this.createBlogForm.controls))
        .subscribe(() => this.router.navigate(['/blogs']));
    }
  }

  private addBlog(lang: LanguagesEnum = LanguagesEnum.EN): void {
    const blog = this.fb.group<BlogsLanguageForm>({
      title: this.fb.nonNullable.control('', Validators.required),
      content: this.fb.nonNullable.control('', Validators.required),
      language: this.fb.nonNullable.control(lang, Validators.required),
    });

    this.blogsFormArray?.push(blog);
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
}
