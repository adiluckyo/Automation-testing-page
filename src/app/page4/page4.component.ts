import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { mapTo, delay } from 'rxjs/operators';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {

  clock = Number('0.0');
  time = 0.0;
  randomnumber: number;
  constructor(private router: Router) { }
  timeoutID;
  delayedAlert() {
    this.timeoutID = window.setInterval(() => this.slowAlert(), 100);
  }
  slowAlert() {
    this.randomnumber = Math.floor((Math.random() * 1) * 100) / 100;
    this.clock += this.randomnumber
  }
  clearAlert() {
    window.clearTimeout(this.timeoutID);
  }
  ngOnInit() {
    this.delayedAlert();
  }

  checkText4() {
    if(this.clock >= 20){
      this.router.navigate(['/page5']);
    }else {
      alert('try again');
    }

  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
