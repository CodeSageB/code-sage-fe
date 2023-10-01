import { Component } from '@angular/core';
import { BlogsService } from '../../shared/services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public loading = this.blogsService.loading;

  public blogs = this.blogsService.blogs;

  constructor(private blogsService: BlogsService) {
    this.blogsService.loadAllBLogs();
  }
}
