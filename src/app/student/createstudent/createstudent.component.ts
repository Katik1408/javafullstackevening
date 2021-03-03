import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/models/signup.model';
import { CrudService } from 'src/app/services/crud/crud.service';
@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css'],
})
export class CreatestudentComponent implements OnInit {
  signup: Signup;
  constructor(private crudService: CrudService) {
    this.signup = {
      Name: '',
      Age: 0,
      Place: '',
    };
  }

  ngOnInit(): void {}
  submit(values) {
    console.log(values);
    this.crudService.addNewStudent(values).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
