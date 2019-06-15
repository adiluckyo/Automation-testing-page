import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from './Data';
@Injectable({
  providedIn: 'root'
})
export class TransferService {

  Result: Data[] = [];
  startTime;
  constructor(private router: Router) { }

  private data: Data;

  setData(stepvar, valuevar) {
    this.data = { step: stepvar, value: valuevar };
    this.Result.push(this.data);

  }

  getData() {
    let temp = this.Result;
    //this.clearData();
    return temp;
  }

  clearData() {
    this.data = undefined;
  }

  setTime(time){
    this.startTime = time;
  }

  getTime(){
    let endTime = new Date();
    var seconds = Math.abs(new Date(endTime).getTime() - new Date(this.startTime).getTime())/1000;
    return seconds;
  }
}

