import { TransferService } from './../transfer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  public number_text: number;
  randomText = '';
  SeletedValue = '';
  TextList: Text3[] = [
    { value: 'I\'m an programmer' },
    { value: 'I\'m an intern' },
    { value: 'I\'m an instructor' },
  ];
  constructor(private router: Router,  private transfereService: TransferService) { }

  ngOnInit() {
    length = this.TextList.length;
    this.number_text = Math.floor(Math.random() * length);
    this.randomText = this.TextList[this.number_text].value;
  }
  checkText3() {
    if (this.randomText === this.SeletedValue) {
      this.transfereService.setData(3,this.SeletedValue);
      this.router.navigate(['/page4']);
    } else {
      alert('Wrong answer, try again');
    }
  }
  selected() {

  }
}
export class Text3 {
  value: string;
}
