import { TransferService } from './../transfer.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  textbox = '';
  constructor(private router: Router, private transferService: TransferService){}
  startTime ;
  ngOnInit() {
    this.startTime = new Date();
    this.transferService.setTime(this.startTime);
  }

  checkEmpty(){
// tslint:disable-next-line: triple-equals
    if (this.textbox === '') {
      alert('please enter text');
    }else {
      this.transferService.setData(1,this.textbox);
      this.router.navigate(['/page2']);
    }
  }
}
