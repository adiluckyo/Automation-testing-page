import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Page3RoutingModule } from './page3-routing.module';
import { Page3Component } from './page3.component';

@NgModule({
  declarations: [Page3Component],
  imports: [
    CommonModule,
    Page3RoutingModule,
    FormsModule
  ]
})
export class Page3Module { }
