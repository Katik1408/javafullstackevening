import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css'],
})
export class Login2Component implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  msg;
  ngOnInit(): void {}

  submit(user, pwd) {
    if (this.authService.checkUser(user, pwd)) {
      this.router.navigateByUrl('/dashboard');
    }
    else{
      this.msg = 'Invalid User';
    }
  }
}
