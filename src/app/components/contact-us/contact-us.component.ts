import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  getrecordsData : any={};

  constructor() {  var mainDiv = document.getElementById('mainDiv');
  mainDiv.style.backgroundImage = "url('dist/assets/img/ybmotionBg_inner.png')";}

  ngOnInit(): void {
  }

  SendData(){
    debugger;
    alert(this.getrecordsData.Name + ' ' + this.getrecordsData.Email+ ' ' + this.getrecordsData.Message)
  }
}
