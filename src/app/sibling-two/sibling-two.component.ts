import { Component, OnInit } from '@angular/core';
import { SiblingDataServiceService } from '../sibling-data-service.service';

@Component({
  selector: 'app-sibling-two',
  templateUrl: './sibling-two.component.html',
  styleUrls: ['./sibling-two.component.scss']
})
export class SiblingTwoComponent implements OnInit {

  messageInsiblingTwo ="msg from sibling two";

  constructor(private dataservice: SiblingDataServiceService) { }

  ngOnInit() {
    this.dataservice.messageFromService.subscribe(m=>this.messageInsiblingTwo=m);
  }

}
