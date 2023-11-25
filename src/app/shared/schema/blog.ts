import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface Blog {
  id: string;
  title: string;
  content: string;
  tags: string[];
  language: string;
  created: Date;
}

export interface BlogList {
  totalCount: number;
  blogs: Blog[];
}

export interface BlogState {
  blogs: Blog[];
  loading: boolean;
  error: string | null;
  totalCount: number;
}

export interface BlogForm {
  blogs: FormArray<FormGroup<BlogsLanguageForm>>;
  tags: FormControl<string[]>;
}

export interface BlogsLanguageForm {
  title: FormControl<string>;
  content: FormControl<string>;
  language: FormControl<string>;
}

export interface BlogRequest {
  translations: CreateBlogTranslation[];
  tags: string[];
}

export interface CreateBlogTranslation {
  title: string;
  content: string;
  language: string;
}
