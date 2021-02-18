import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'Template Driven';
  submitted = false;
  loginModel = new LoginModel();

  submit(data) {
    this.submitted = true;
    console.log(data);
  }

  log(d) {
    console.log(d);
  }
}
