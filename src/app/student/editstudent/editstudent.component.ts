import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/models/signup.model';
import { CrudService } from 'src/app/services/crud/crud.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css'],
})
export class EditstudentComponent implements OnInit {
  public student: Signup;
  constructor(
    private dataSerive: DataService,
    private crudService: CrudService
  ) {
    // this.dataSerive.currentStudent$.subscribe((st: Signup) => {
    //   console.log(st);
    //   this.student.Name = st.Name;
    //   this.student.Age = st.Age;
    //   // this.student.Place = st.Place;
    // });
    // console.log(this.student);
  }
  ngOnInit(): void {
    console.log('Inside ngOninit');
      // this.dataSerive.currentStudent$.subscribe(
      //   (st: Signup) => {
      //     this.student.Name = st.Name;
      //     this.student.Age = st.Age;
      //     this.student.Place = st.Place;
      //     console.log('Data in student inside subs');
      //     console.log(this.student);
      //   },
      //   (err) => console.log(err)
      // // );
      // this.dataSerive.currentStudent$.pipe()
      // console.log('Data in student outside subs');
      // console.log(this.student);
  }

  // ngOnInit() {
  //  
  // }

  submit(values) {
    console.log(values);
    this.crudService
      .editStudent(1, values)
      .subscribe((data) => console.log(data));
  }
}
