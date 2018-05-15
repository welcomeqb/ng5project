import { Component, OnInit } from '@angular/core';
import { SiblingDataServiceService } from '../sibling-data-service.service';


@Component({
  selector: 'app-sibling-one',
  templateUrl: './sibling-one.component.html',
  styleUrls: ['./sibling-one.component.scss']
})
export class SiblingOneComponent implements OnInit {

  messageInSiblingOne ="message sibling one";
  constructor(private dataService : SiblingDataServiceService) { }

  ngOnInit() {
    this.dataService.messageFromService.subscribe(m=>this.messageInSiblingOne=m);
  }

  changeSiblingOneMessage(){

    this.messageInSiblingOne ="change siblingone message inside sibling one";
  }

  changeServiceMessage(){

    this.dataService.changeMessage("message changed for service from sibling one");
  }

}
