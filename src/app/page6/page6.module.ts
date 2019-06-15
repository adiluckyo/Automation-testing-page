import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Page6RoutingModule } from './page6-routing.module';
import { Page6Component } from './page6.component';

@NgModule({
  declarations: [Page6Component],
  imports: [
    CommonModule,
    Page6RoutingModule,
    FormsModule
  ]
})
export class Page6Module { }
