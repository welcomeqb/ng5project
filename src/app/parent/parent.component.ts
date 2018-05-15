import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public messageInParent ="message from parent";

  public messageFromChildTwo ="from parent";


  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event){
    this.messageFromChildTwo = $event;
  }

}
