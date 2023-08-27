import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from '../../../data/schema/blog';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, BlogComponent],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent {
  @Input({ required: true }) blogs: Blog[];

  @Input() showFilter = false;

  @Input() showPagination = false;
}
