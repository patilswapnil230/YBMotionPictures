import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public changebackgroundImage  = new Subject<string>();

  constructor(private http: HttpClient) { }

  refreshBackground(className : string){
    this.changebackgroundImage.next(className);
  }

  sendEmail(url, data) {
    return this.http.post(url, data);
  }


}
