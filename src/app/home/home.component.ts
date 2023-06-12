import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user';
import { UService } from '../Service/u.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public user?: User;

  constructor(private readonly uService: UService, ) {}

  async ngOnInit() {
    this.user = await this.uService.getUser();
  }
}




