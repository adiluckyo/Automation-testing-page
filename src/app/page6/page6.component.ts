import { TransferService } from './../transfer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.css']
})
export class Page6Component implements OnInit {
  result: string[] = ['', '', '', '', ''];
  data;
  constructor(private transfereService: TransferService) { }

  ngOnInit() {
    this.data = this.transfereService.getData();
    console.log(this.data);


    for (const temp  of this.data) {
     console.log(temp.step + temp.value);
     this.result[temp.step - 1 ] = temp.value;
   }

  }

  getRunningTime(){
    let runningTime = this.transfereService.getTime();
    alert('You got ' + runningTime + ' seconds');
  }

}
