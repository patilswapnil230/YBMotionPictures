import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/shared/service/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.refreshBackground('home-bg');
  }

}
