import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'reg',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  control;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      emailid: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
        Validators.pattern('/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/')
      ]),
    });
    this.control = this.loginForm.controls;
  }

  get f() {
    return this.loginForm.controls;
  }

  submit(data) {
    console.log('Form Controls');
    console.log(this.control);
    console.log('--------------');

    this.submitted = true;
    console.log(data);
  }
  //FormGroup //FormControl
}
