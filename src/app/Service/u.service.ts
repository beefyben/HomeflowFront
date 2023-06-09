import { Injectable } from '@angular/core';
import { User } from '../Model/user';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UService {

  private baseUrl="http://localhost:8081";

  constructor(private httpClient: HttpClient) { }

  async getUser() {
    const user = await lastValueFrom(this.httpClient.get<User>(`${this.baseUrl}/current-user`, {
      headers: {
        Authorization: localStorage.getItem("token")!
      },
    }));
    return user;
  }


}



