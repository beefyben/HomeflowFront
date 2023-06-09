import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private baseUrl="http://localhost:8081";

  constructor(private httpClient: HttpClient) { }

  async loginUser(user: User) {
    console.log(user)
    const res: any = await lastValueFrom(this.httpClient.post(`${this.baseUrl}/auth/login`, user));
    localStorage.setItem("token", `Bearer ${res.token}`);
    return res.user;
  }

  logout() {
    localStorage.removeItem("token");
  }
}
