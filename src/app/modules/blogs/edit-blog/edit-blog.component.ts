import { Component } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { Blog, BlogForm } from '../../../shared/schema/blog';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from '../../../shared/services/blogs.service';
import { Utils } from '../../../shared/tools/utils';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss'],
})
export class EditBlogComponent {
  public blog$: Observable<Blog | null> = of(null);

  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService,
    private router: Router,
  ) {
    this.blog$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const blogId = params.get('id');
        if (!blogId) return of(null);

        return this.blogsService.getBlog(blogId);
      }),
    );
  }

  public updateBlog(blogForm: BlogForm, blogId: string): void {
    this.blogsService
      .updateBlog(blogId, Utils.MapBlogRequest(blogForm))
      .subscribe(() => this.router.navigate(['/blogs']));
  }
}
