import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'QB Home';
  itemCount: number = 4;
  btnText : string = "add one";
  goalText:string = "initial goal";
  goalList = [];

  @Input() public parentvalue;

  constructor() { }

  ngOnInit() {
    this.itemCount =this.goalList.length;
  }

  addGoal(){
     debugger;
    this.goalList.push(this.goalText);
    this.goalText="";
    this.itemCount= this.goalList.length;
   

  }

  removeItem(i){

    this.goalList.splice(i,1);
    this.itemCount = this.goalList.length;
  }

}
