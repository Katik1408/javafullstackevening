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
  constructor(
    private dataSerive: DataService,
    private crudService: CrudService
  ) {
    
  }
  student : Signup;
  ngOnInit(): void {
    this.dataSerive.currentStudent$.subscribe((st : Signup) => {
      console.log(st);
      this.student = st;
    });
    console.log(this.student);
  }

  submit(values) {
    console.log(values);
    this.crudService
      .editStudent(1, values)
      .subscribe((data) => console.log(data));
  }
}
