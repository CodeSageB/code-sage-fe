import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { BlogsService } from '../../shared/services/blogs.service';
import { ErrorComponent } from '../../shared/components/error/error.component';
import { TranslateModule } from '@ngx-translate/core';
import { BlogListComponent } from '../../shared/components/blog-list/blog-list.component';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';

@NgModule({
  declarations: [BlogsComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    ErrorComponent,
    TranslateModule,
    BlogListComponent,
    SpinnerComponent,
  ],
  providers: [BlogsService],
})
export class BlogsModule {}
