import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public messageSource = new BehaviorSubject('Defualt data');
  public currentData$ = this.messageSource.asObservable();
  constructor() {}

  sendDataToNext(message: string) {
    this.messageSource.next(message);
  }
}
