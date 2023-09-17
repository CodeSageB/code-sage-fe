import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from '../../schema/blog';
import { MaterialModule } from '../../material.module';
import { FormatDatePipe } from '../../pipes/format-date.pipe';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, MaterialModule, FormatDatePipe],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  @Input({ required: true }) blog: Blog;
}
