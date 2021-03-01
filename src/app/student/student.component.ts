import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  constructor(private crudService: CrudService) {}
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
}
