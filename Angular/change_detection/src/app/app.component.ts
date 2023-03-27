import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'change_detection';
  emp_name:string="hiren"

  emp_object={
    id:1,name:"raj"
  }

  updateName(){
    this.emp_name="raj"
  }
  updateObj(){
    this.emp_object.name="karan";
  }

  app(){
    console.log("app called");
  }
}
