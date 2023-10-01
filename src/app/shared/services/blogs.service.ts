import { computed, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog, BlogState } from '../schema/blog';
import { Observable, Subject, switchMap, tap } from 'rxjs';
import { Pagination } from '../schema/pagination';
import { environment } from '../../../environments/environment';
import { LanguagesEnum } from '../schema/languages.enum';
import { LocalisationService } from './localisation.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class BlogsService {
  private loadBlogs = this.localisationService.currentLang$.pipe(
    takeUntilDestroyed(),
    switchMap((lang) => {
      this.setLoading$.next(true);
      return this.getBlogs(lang);
    }),
    tap(() => {
      this.setLoading$.next(false);
    }),
  );

  private state = signal<BlogState>({ blogs: [], loading: true });

  public loading = computed(() => this.state().loading);

  public blogs = computed(() => this.state().blogs);

  public setLoading$ = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private localisationService: LocalisationService,
  ) {
    this.setLoading$.pipe(takeUntilDestroyed()).subscribe((val) => {
      this.state.update((state) => ({ ...state, loading: val }));
    });
  }

  public loadAllBLogs(): void {
    this.loadBlogs.pipe(takeUntilDestroyed()).subscribe((blog) => {
      this.state.update((state) => ({ ...state, blogs: blog, loading: false }));
    });
  }

  private getBlogs(language: LanguagesEnum, pagination?: Pagination): Observable<Blog[]> {
    return this.http.post<Blog[]>(`${environment.blogApi}/all?lang=${language}`, {
      pagination,
    });
  }
}
