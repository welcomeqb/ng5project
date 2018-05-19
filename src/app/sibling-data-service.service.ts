import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingDataServiceService {

  messageFromService = new BehaviorSubject<string>("default message from service");
  //currentMessage =this.messageFromService.asObservable();
   newString:string ="new string from service";

  constructor() { }

  changeMessage(msg:string){

   this.messageFromService.next(msg);
   
  }
}
