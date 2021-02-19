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

  isSpecial = true;

  getData() {
    return 'Hello from GetData';
  }


  getColor(country){

    switch(country){
      case 'IN':
        return '#0984e3';
      case 'UK':
        return '#d63031';
      case 'US':
        return '#fd79a8';
    }
  }


  people = [
    { user: 'Rahul',place:'IN' },
    {
      user: 'Rohit', place:'UK'
    },
    {
      user:'Mohan',place:'US'
    },{
      user:'Vineet', place : 'IN'
    }
  ];

  show() {
    this.title = 'New title';
  }
}
