import { Component, OnInit } from '@angular/core';
import { AddHomeService } from '../Service/addhome.service';
import { Router } from '@angular/router';
import {Home} from '../Model/home';


@Component({
  selector: 'app-addhome',
  templateUrl: './addhome.component.html',
  styleUrls: ['./addhome.component.css']
})
export class AddhomeComponent implements OnInit {
  home: Home = new Home;
  constructor(
    private addhomeService: AddHomeService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  async homeAdding() {
    console.log(this.home);

    this.home = await this.addhomeService.addHome(this.home);
    this.router.navigateByUrl('/home');
  }


}


