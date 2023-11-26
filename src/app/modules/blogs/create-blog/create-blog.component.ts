import { Component } from '@angular/core';
import { Utils } from '../../../shared/tools/utils';
import { BlogForm } from '../../../shared/schema/blog';
import { BlogsService } from '../../../shared/services/blogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss'],
})
export class CreateBlogComponent {
  constructor(
    private blogsService: BlogsService,
    private router: Router,
  ) {}

  public createBlog(blogForm: BlogForm): void {
    this.blogsService
      .createBlog(Utils.MapBlogRequest(blogForm))
      .subscribe(() => this.router.navigate(['/blogs']));
  }
}
