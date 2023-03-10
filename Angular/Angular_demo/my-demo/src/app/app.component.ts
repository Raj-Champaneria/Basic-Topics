import { Component } from '@angular/core';
import { Interface } from './interface';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-demo';
  name:string='raj';
  style='border:1px solid black';
  class1="heading";
  myfun(){
    this.name="viren"
  }
  data:Interface={
    name1:"Raj Champaneria11"
  }
  num="1"
}
