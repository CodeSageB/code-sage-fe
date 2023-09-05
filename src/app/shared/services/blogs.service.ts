import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../schema/blog';
import { Observable } from 'rxjs';
import { Pagination } from '../schema/pagination';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private http: HttpClient) {}

  public getBlogs(pagination?: Pagination): Observable<Blog[]> {
    return this.http.post<Blog[]>(`${environment.blogApi}/all`, pagination ? pagination : null);
  }
}
