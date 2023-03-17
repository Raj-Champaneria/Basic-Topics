import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  public myid:any;
  public newData:any;
  public url:any;
  ngOnInit(): void {
    this.url=this.route.snapshot.url[1].path;
    this.myid=this.route.snapshot.paramMap.get('salary');
    this.newData=JSON.parse(this.myid);
    console.log(this.url);
    
  }
}
