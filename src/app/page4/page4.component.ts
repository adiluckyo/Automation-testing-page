import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { mapTo, delay } from 'rxjs/operators';
import { TransferService } from './../transfer.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {

  clock = Number('0.0');
  time = 0.0;
  check = true;
  randomnumber: number;
  constructor(private router: Router, private transfereService: TransferService) { }
  timeoutID;
  delayedAlert() {
    this.timeoutID = window.setInterval(() => this.slowAlert(), 200);
  }
  slowAlert() {
    this.randomnumber = Math.floor((Math.random() * 1) * 100) / 100;
    this.clock += this.randomnumber;
  }
  clearAlert() {
    window.clearTimeout(this.timeoutID);
  }
  ngOnInit() {
    this.delayedAlert();
  }

  checkText4() {
    if (this.clock >= 30) {
      if (this.check) {
        this.transfereService.setData(4, this.clock);
        this.check = false;
      }
      this.router.navigate(['/page5']);
    } else {
      alert('try again');
    }

  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
