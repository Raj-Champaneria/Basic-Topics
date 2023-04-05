import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
public isAddClick=false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleForm(data:boolean){
    this.isAddClick=data
  }
  public submit(){
    //api post call
  }
  public getStudent(){
    //get all service call
  }

  public editStudent(){
    // put service call
  }
}
