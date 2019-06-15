import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Page5RoutingModule } from './page5-routing.module';
import { Page5Component } from './page5.component';

@NgModule({
  declarations: [Page5Component],
  imports: [
    CommonModule,
    Page5RoutingModule,
    FormsModule
  ]
})
export class Page5Module { }
