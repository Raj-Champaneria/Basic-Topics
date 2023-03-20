import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public employee=[
    {id:1,name:"Raj Champaneria",domain:"Front-end",experience:"4 Years"},
    {id:2,name:"Megha",domain:"QA",experience:"3 Years"},
    {id:3,name:"Kinjal",domain:"ML",experience:"5 Years"},
    {id:4,name:"Krupa",domain:".NET",experience:"2 Years"},
    {id:5,name:"Vaishnavi",domain:"DEV OPS",experience:"1 Years"}
  ]
  ngOnInit(): void {
  }

}
