import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public empArr=[
    {id:1,name:"raj",salary:35000},
    {id:2,name:"Keval",salary:39000},
    {id:3,name:"Mihir",salary:35000}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
