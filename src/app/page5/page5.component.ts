import { TransferService } from './../transfer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit {
  TextList: Text5[] = [
    { id: 1, value: 'I want to go to next step.' },
    { id: 2, value: 'I want to start from the beginning' },
    { id: 3, value: 'Other' },
  ];
  constructor(private router: Router, private transfereService: TransferService) { }

  ngOnInit() {

  }

  checkRadio(text) {
    if (text.value === this.TextList[0].value) {
      this.transfereService.setData(5,text.value);
      this.router.navigate(['/page6']);
    } else {
      alert('Wrong answer, try again')
    }
  }
}
export class Text5 {
  id : number;
  value: string;
}
