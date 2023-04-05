import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public toggle:boolean = false
  constructor() { }

  ngOnInit(): void {
    console.log(this.toggle);   
  }

  callingEvent(data:boolean){
    this.toggle = data
    console.log(this.toggle);
  }

  closeForm(data:boolean){
    this.toggle = data
    console.log(this.toggle);
  }

}
