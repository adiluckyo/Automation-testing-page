import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Page1RoutingModule } from './page1-routing.module';
import { Page1Component } from './page1.component';

@NgModule({
  declarations: [Page1Component],
  imports: [
    CommonModule,
    Page1RoutingModule,
    FormsModule
  ]
})
export class Page1Module { }
