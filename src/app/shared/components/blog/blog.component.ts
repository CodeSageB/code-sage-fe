import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from '../../schema/blog';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  @Input({ required: true }) blog: Blog;
}
