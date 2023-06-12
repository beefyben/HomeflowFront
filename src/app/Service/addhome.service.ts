import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { Home } from '../Model/home';

@Injectable({
  providedIn: 'root'
})
export class AddHomeService {

  private baseUrl="http://localhost:8081";

  constructor(private httpClient: HttpClient) { }

  async addHome(home: Home) {
    console.log(home)
    return await lastValueFrom(this.httpClient.post<Home>(`${this.baseUrl}/addhome/homeadd`, home));
  }


  async getHomes(): Promise<Home[]> {
    return await lastValueFrom(this.httpClient.get<Home[]>(`${this.baseUrl}/home`));
  }

}




