import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){

  }
  title = 'pipe-task';
  name="pipe Task with filter"
  filterstring:string="";
  class1:boolean=true;
  class2:boolean=true;

  public employee=[
    {"id":1,"name":"Raj","salary":5000,"phone":987959599},
    {"id":2,"name":"Keval","salary":6000,"phone":8888888599},
    {"id":3,"name":"Mihir","salary":7000,"phone":987959599},
    {"id":4,"name":"Kushal","salary":8000,"phone":987959599}
  ];
}
