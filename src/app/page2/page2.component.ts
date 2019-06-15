import { TransferService } from './../transfer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})

export class Page2Component implements OnInit {
  // tslint:disable-next-line: variable-name
  public number_text: number;
  randomText = '';
  TextList: Text2[] = [
    { value: 'Hello, I\'m an intern' },
    { value: 'I love CMU' },
    { value: 'We love bugs' },
    { value: 'I\'m learning selenium' },
    { value: 'I\'m learning robot framework' },
  ];


  constructor(private router: Router, private transferService: TransferService) { }

  ngOnInit() {
    length = this.TextList.length;
    this.number_text = Math.floor(Math.random() * length);
    this.randomText = this.TextList[this.number_text].value;
  }


  checkText() {
    let text = prompt('Please enter the text');
    if (text != null && text !== '') {
      if (text === this.TextList[this.number_text].value) {
        this.transferService.setData(2,text);
        this.router.navigate(['/page3']);
      } else {
        alert('Wrong answer, try again');
      }
    }
  }
}
export class Text2 {
  value: string;
}

