import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public changebackgroundImage  = new Subject<string>();

  constructor() { }

 refreshBackground(className : string){
  this.changebackgroundImage.next(className);
 }


}
