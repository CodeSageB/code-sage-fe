import { Component } from '@angular/core';
import { BlogsService } from '../../shared/services/blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  blogs$ = this.blogsService.getBlogs();

  constructor(private blogsService: BlogsService) {}
}
