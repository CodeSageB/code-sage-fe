import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from '../blog/blog.component';
import { MaterialModule } from '../../material.module';
import { BlogListStateService } from './blog-list-state.service';
import { ErrorComponent } from '../error/error.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { Blog } from '../../schema/blog';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [
    CommonModule,
    BlogComponent,
    MaterialModule,
    ErrorComponent,
    SpinnerComponent,
    TranslateModule,
    RouterLink,
  ],
  providers: [BlogListStateService],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  @Input() showFilter = false;

  @Input() isBlogsPreview = false;

  @Input() fullBlogListUrl?: string;

  @Input() itemsPerPage?: number;

  public loading = this.blogsStateService.loading;

  public error = this.blogsStateService.error;

  public blogs = this.blogsStateService.blogs;

  public totalCountBlogs = this.blogsStateService.totalCount;

  constructor(public blogsStateService: BlogListStateService) {}

  ngOnInit(): void {
    this.blogsStateService.loadAllBLogs(this.itemsPerPage);
  }

  public trackBy(index: number, item: Blog) {
    return item.id;
  }
}
