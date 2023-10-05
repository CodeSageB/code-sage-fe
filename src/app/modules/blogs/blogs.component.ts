import { Component } from '@angular/core';
import { BlogsService } from '../../shared/services/blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent {
  public loading = this.blogsService.loading;

  public error = this.blogsService.error;

  public blogs = this.blogsService.blogs;

  constructor(private blogsService: BlogsService) {
    this.blogsService.loadAllBLogs();
  }
}
