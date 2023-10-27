import { Injectable } from '@angular/core';
import { LanguagesEnum } from '../schema/languages.enum';
import { Pagination } from '../schema/pagination';
import { Observable } from 'rxjs';
import { BlogList } from '../schema/blog';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private http: HttpClient) {}

  public getBlogs(language: LanguagesEnum, pagination?: Pagination): Observable<BlogList> {
    return this.http.post<BlogList>(`${environment.blogApi}/all?lang=${language}`, pagination);
  }
}
