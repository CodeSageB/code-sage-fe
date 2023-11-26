import { Injectable } from '@angular/core';
import { LanguagesEnum } from '../schema/languages.enum';
import { Pagination } from '../schema/pagination';
import { Observable } from 'rxjs';
import { Blog, BlogList, BlogRequest, BlogWithTranslations } from '../schema/blog';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LocalisationService } from './localisation.service';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private baseUrl = environment.blogApi;

  constructor(
    private http: HttpClient,
    private localisationService: LocalisationService,
  ) {}

  public getBlogs(language: LanguagesEnum, pagination?: Pagination): Observable<BlogList> {
    return this.http.post<BlogList>(`${this.baseUrl}/all?lang=${language}`, pagination);
  }

  public getBlog(id: string) {
    const params = new HttpParams().set('lang', this.localisationService.currentLangSignal());

    return this.http.get<Blog>(`${this.baseUrl}/${id}`, { params });
  }

  public getBlogWithAllTranslations(id: string): Observable<BlogWithTranslations> {
    return this.http.get<BlogWithTranslations>(`${this.baseUrl}/translation-all/${id}`);
  }

  public createBlog(blog: BlogRequest): Observable<BlogWithTranslations> {
    return this.http.post<BlogWithTranslations>(`${this.baseUrl}`, blog);
  }

  public updateBlog(id: string, blog: BlogRequest): Observable<BlogWithTranslations> {
    return this.http.put<BlogWithTranslations>(`${this.baseUrl}/${id}`, blog);
  }

  public removeBlog(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
