import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud/crud.service';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  constructor(
    private crudService: CrudService,
    private router: Router,
    private dataSerive: DataService
  ) {}
  public students;
  ngOnInit(): void {
    this.crudService.getAllStudent().subscribe(
      (data) => {
        this.students = data;
        console.log(data);
      },
      (err) => console.log(err)
    );
  }
  delete(id) {
    this.crudService.deleteStudent(id).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => console.log(err)
    );
  }
  createStudent() {
    this.router.navigateByUrl('student/createstudent');
  }
  openEditComponent(student) {
    this.dataSerive.sendStudentData(student);
    this.router.navigateByUrl('student/updatestudent');
  }
}
