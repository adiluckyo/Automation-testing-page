import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})

export class Page2Component implements OnInit {

  TextList: Text[] = [
    { value: 'Dr Nice' },
    { value: 'Narco' },
    { value: 'Bombasto' },
    { value: 'Celeritas' },
    { value: 'Magneta' },
    { value: 'RubberMan' },
    { value: 'Dynama' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
export class Text {
  value: string;
}

