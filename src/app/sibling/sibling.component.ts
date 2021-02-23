import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css'],
})
export class SiblingComponent implements OnInit {
  constructor(private dataService: DataService) {}
  datafromparent;
  ngOnInit(): void {
    this.dataService.currentData$.subscribe(
      (data) => {
        this.datafromparent = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
