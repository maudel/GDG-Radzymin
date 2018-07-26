import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './containers/blog/blog.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    BlogComponent
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
