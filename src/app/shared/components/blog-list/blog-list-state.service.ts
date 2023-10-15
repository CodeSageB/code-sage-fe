import { computed, Injectable, OnDestroy, signal } from '@angular/core';
import { BlogState } from '../../schema/blog';
import { BehaviorSubject, Subject, switchMap, tap } from 'rxjs';
import { Pagination } from '../../schema/pagination';
import { LocalisationService } from '../../services/localisation.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BlogsService } from '../../services/blogs.service';

@Injectable()
export class BlogListStateService implements OnDestroy {
  private state = signal<BlogState>({ blogs: [], totalCount: 0, loading: true, error: null });

  public loading = computed(() => this.state().loading);

  public blogs = computed(() => this.state().blogs);

  public error = computed(() => this.state().error);

  public totalCount = computed(() => this.state().totalCount);

  public setLoading$ = new Subject<boolean>();

  public error$ = new Subject<string>();

  private pagination$ = new BehaviorSubject<Pagination>({ page: 1, take: 10 });

  private loadBlogs = this.pagination$.pipe(
    takeUntilDestroyed(),
    switchMap((pagination) => {
      this.setLoading$.next(true);
      return this.blogsService
        .getBlogs(this.localisationService.currentLangSignal(), pagination)
        .pipe(tap(() => this.setLoading$.next(false)));
    }),
  );

  ngOnDestroy(): void {
    console.log('Done');
  }

  constructor(
    private blogsService: BlogsService,
    private localisationService: LocalisationService,
  ) {
    this.setLoading$.pipe(takeUntilDestroyed()).subscribe((val) => {
      this.state.update((state) => ({ ...state, loading: val }));
    });

    this.error$.pipe(takeUntilDestroyed()).subscribe((val) => {
      this.state.update((state) => ({ ...state, error: val, loading: false }));
    });
  }

  public loadAllBLogs(itemsPerPage?: number): void {
    if (itemsPerPage) {
      this.pagination$.next({ ...this.pagination$.value, take: itemsPerPage });
    }

    this.loadBlogs.subscribe({
      next: (blogList) => {
        this.state.update((state) => ({
          ...state,
          blogs: blogList.blogs,
          totalCount: blogList.totalCount,
          loading: false,
        }));
      },
      error: (err) => {
        this.error$.next(err.message);
      },
    });
  }

  public loadMoreBlogs(): void {
    this.pagination$.next({ ...this.pagination$.value, page: this.pagination$.value.page + 1 });
  }
}
