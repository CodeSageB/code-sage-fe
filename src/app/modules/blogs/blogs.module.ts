import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { ErrorComponent } from '../../shared/components/error/error.component';
import { TranslateModule } from '@ngx-translate/core';
import { BlogListComponent } from '../../shared/components/blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';
import { FormatDatePipe } from '../../shared/pipes/format-date.pipe';
import { MaterialModule } from '../../shared/material.module';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogFormComponent } from './forms/blog-form/blog-form.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';

@NgModule({
  declarations: [
    BlogsComponent,
    BlogDetailComponent,
    CreateBlogComponent,
    BlogFormComponent,
    EditBlogComponent,
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    ErrorComponent,
    TranslateModule,
    BlogListComponent,
    SpinnerComponent,
    FormatDatePipe,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class BlogsModule {}
