import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {Signup} from 'src/app/models/signup.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public messageSource = new BehaviorSubject('Defualt data');
  public currentData$ = this.messageSource.asObservable();
  
  public studentSource = new Subject();

  public currentStudent$ = this.studentSource.asObservable();

  constructor() {}

  sendDataToNext(message: string) {
    this.messageSource.next(message);
  }

  sendStudentData(student: Signup){
    this.studentSource.next(student);
  }

}
