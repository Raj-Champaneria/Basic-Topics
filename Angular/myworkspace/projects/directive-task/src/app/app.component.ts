import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'directive-task';
  border="1px solid black";
  td:boolean=true;
   message="Hii"
  public header=[
    {
      "id":"#","name":"Name","Per":"Percentage","action":"Action"
  }]

  public student= [
    {"id":1,"name":"raj","percentage":85 ,"pass":true},
    {"id":2,"name":"Keval","percentage":40,"pass":false},
    {"id":3,"name":"Mihir","percentage":82,"pass":false},
  ];

  selectday:string | undefined;

  getday(data:any):void{
    console.log(data.target.value);
    this.selectday=data.target.value;
  }
}
