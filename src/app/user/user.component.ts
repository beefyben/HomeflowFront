import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user';
import { UService } from '../Service/u.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public user?: User;

  constructor(private readonly uService: UService) {}

  async ngOnInit() {
    this.user = await this.uService.getUser();
  }
}
