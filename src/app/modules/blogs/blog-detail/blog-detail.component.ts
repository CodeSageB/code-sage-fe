import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../../shared/schema/blog';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { BlogsService } from '../../../shared/services/blogs.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent {
  public blog: Observable<Blog | null> = of(null);

  // TODO Situace když blog v jiném jazace neexistuje. Při refreshi přesměrovat na domovskou stranku nebo to resit v detailu?
  constructor(
    private route: ActivatedRoute,
    public blogsService: BlogsService,
    private router: Router,
  ) {
    this.blog = this.route.paramMap.pipe(
      switchMap((params) => {
        const blogId = params.get('id');
        if (!blogId) return of(null);

        return this.blogsService.getBlog(blogId);
      }),
      catchError(() => {
        this.router.navigate(['/blogs'], { queryParams: { error: 'no-detail' } });
        return of(null);
      }),
    );
  }

  public removeBlog(id: string): void {
    this.blogsService.removeBlog(id).subscribe(() => {
      this.router.navigate(['/blogs']);
    });
  }
}
