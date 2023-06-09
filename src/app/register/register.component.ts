import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from '../Service/registeruser.service';
import { Router } from '@angular/router';
import { User } from '../Model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    user: User = new User();
    constructor(
      private registerUserService: RegisterUserService,
      private readonly router: Router
    ) {}


  ngOnInit(): void {}
  async userRegister() {
    console.log(this.user);
    this.user = await this.registerUserService.registerUser(this.user);
    this.router.navigateByUrl('/login');
  }
}
