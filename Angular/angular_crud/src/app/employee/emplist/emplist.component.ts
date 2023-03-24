import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  constructor() { }
  public tablehead=[
    {id:"ID",name:"NAME",field:"FIELD",address:"ADDRESS",contact:"CONTACT",action:"ACTION"}
  ]
  public tableArr=[
    {id:1,name:"raj",field:"frontend",address:"valsad",contact_no:9429329596},
    {id:2,name:"Keval",field:"QA",address:"valsad",contact_no:9773115929},
    {id:3,name:"Mihir",field:".NET",address:"USA",contact_no:9225599855},
  ]
  ngOnInit(): void {
  }

}
