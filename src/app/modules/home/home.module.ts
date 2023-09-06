import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BlogListComponent } from '../../shared/components/blog-list/blog-list.component';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, BlogListComponent, MatButtonModule, SpinnerComponent],
})
export class HomeModule {}
