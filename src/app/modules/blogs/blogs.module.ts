import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { ErrorComponent } from '../../shared/components/error/error.component';
import { TranslateModule } from '@ngx-translate/core';
import { BlogListComponent } from '../../shared/components/blog-list/blog-list.component';

@NgModule({
  declarations: [BlogsComponent],
  imports: [CommonModule, BlogsRoutingModule, ErrorComponent, TranslateModule, BlogListComponent],
})
export class BlogsModule {}
