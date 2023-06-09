import { Component, OnInit } from '@angular/core';
import { LoginuserService } from '../Service/loginuser.service';
import { Router } from '@angular/router';
import { User } from '../Model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(
    private loginuserservice: LoginuserService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}
  async userLogin() {
    console.log(this.user);
    this.user = await this.loginuserservice.loginUser(this.user);
    this.router.navigateByUrl('/');
  }
}
