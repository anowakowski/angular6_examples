import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponentComponent } from './view-component/view-component.component';

@NgModule({
  declarations: [
    ViewComponentComponent
  ],
  exports: [
    ViewComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewModule { }
