import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/shared/service/shared.service';

@Component({
  selector: 'app-about-ybmp',
  templateUrl: './about-ybmp.component.html',
  styleUrls: ['./about-ybmp.component.css']
})
export class AboutYbmpComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.refreshBackground('inner-bg');

  }

}
