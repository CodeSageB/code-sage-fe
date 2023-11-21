import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
  },
  {
    path: 'detail/:id',
    component: BlogDetailComponent,
  },
  {
    path: 'create',
    component: CreateBlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}
