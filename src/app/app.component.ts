import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FirstApp';
  name = 'Angular';
  getData() {
    return 'Hello from GetData';
  }

  people = [
    { user: 'Rahul',place:'IN' },
    {
      user: 'Rohit', place:'UK'
    },
    {
      user:'Mohan',place:'US'
    }
  ];

  show() {
    this.title = 'New title';
  }
}
