import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactive: number = 0;
  inactiveToActive: number = 0;
  constructor() { }

  incrementActiveToInactive(){
    this.activeToInactive++;
    console.log("active to inactive: ", this.activeToInactive)
  }
  incrementInactiveToActive(){
    this.inactiveToActive++;
    console.log("inactive to active: ", this.inactiveToActive)
  }
}
