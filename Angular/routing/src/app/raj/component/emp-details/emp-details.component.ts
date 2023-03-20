import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  constructor(private routes:ActivatedRoute) { }
  public empid:any;
  public newData:any;
  ngOnInit(): void {
    this.empid=this.routes.snapshot.paramMap.get('id');
    this.newData=JSON.parse(this.empid);
  }

}
