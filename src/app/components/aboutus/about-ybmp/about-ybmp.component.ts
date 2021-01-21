import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/shared/service/shared.service';

@Component({
  selector: 'app-about-ybmp',
  templateUrl: './about-ybmp.component.html',
  styleUrls: ['./about-ybmp.component.css']
})
export class AboutYbmpComponent implements OnInit {

  constructor(public sharedService: SharedService) {   
    var mainDiv = document.getElementById('mainDiv');
    mainDiv.style.backgroundImage = "url('dist/assets/img/ybmotionBg_inner.png')";
  }

  ngOnInit(): void {}

}
