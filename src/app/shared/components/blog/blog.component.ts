import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from '../../../data/schema/blog';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  @Input({ required: true }) blog: Blog;
}
