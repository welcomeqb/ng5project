import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.scss']
})
export class ChildtwoComponent implements OnInit {

  messageInChildTwo:string = "message from child two";

  @Output() messageEvent = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  sendMessage(){

    this.messageEvent.emit(this.messageInChildTwo);
  }

}
