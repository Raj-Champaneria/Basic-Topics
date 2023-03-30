import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud_with_api';
  id: any;
  name: any;
  age: any;
  address: any;
  sports: any;
  editdata(data: any) {
    this.id=data.id,
    this.name=data.name,
    this.age=data.age,
    this.address=data.address,
    this.sports=data.sports
  }
}
