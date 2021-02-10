import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/shared/service/shared.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  getrecordsData : any={};

  constructor(private sharedService: SharedService) {  var mainDiv = document.getElementById('mainDiv');
  mainDiv.style.backgroundImage = "url('dist/assets/img/ybmotionBg_inner.png')";}

  ngOnInit(): void {
  }

  SendData(){
    debugger;
    // alert(this.getrecordsData.Name + ' ' + this.getrecordsData.Email+ ' ' + this.getrecordsData.Message)
    let user = {
      name: 'Sumit Sutar',
      email: 'sutar.sumit32.ss@gmail.com'
    }
    this.sharedService.sendEmail("http://localhost:3000/sendmail", user).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
        );
      },
      err => {
        console.log(err);
      },() => {
      }
    );

    
  }

  
}
