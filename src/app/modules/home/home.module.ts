import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BlogListComponent } from '../../shared/components/blog-list/blog-list.component';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorComponent } from '../../shared/components/error/error.component';
import { BlogsService } from '../../shared/services/blogs.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BlogListComponent,
    MatButtonModule,
    SpinnerComponent,
    TranslateModule,
    ErrorComponent,
  ],
  providers: [BlogsService],
})
export class HomeModule {}
