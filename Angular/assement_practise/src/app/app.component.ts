import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assement_practise';
  public toggle:boolean=true;
  id: any;
  name: any;
  age: any;
  email:any
  getUserData(data:any){
    this.id=data.id,
    this.name=data.name,
    this.age=data.age,
    this.email=data.email,
    this.toggle=data.toggle
    console.log(data.toggle);
    
  }
}
