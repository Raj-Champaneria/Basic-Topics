import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public limit: number = 10;
  public buttonNum: any;

  public tablehead = [
    { id: "#", name: "NAME", surname: "SURNAME" }
  ]
  public btnArr: number[] = [];
  public tableArr = [
    { id: 1, name: "raj", surname: "champaneria" },
    { id: 2, name: "raj", surname: "champaneria" },
    { id: 3, name: "raj", surname: "champaneria" },
    { id: 4, name: "raj", surname: "champaneria" },
    { id: 5, name: "raj", surname: "champaneria" },
    { id: 6, name: "raj", surname: "champaneria" },
    { id: 7, name: "raj", surname: "champaneria" },
    { id: 8, name: "raj", surname: "champaneria" },
    { id: 9, name: "raj", surname: "champaneria" },
    { id: 10, name: "raj", surname: "champaneria" },
    { id: 11, name: "raj", surname: "champaneria" },
    { id: 12, name: "raj", surname: "champaneria" },
    { id: 13, name: "raj", surname: "champaneria" },
    { id: 14, name: "raj", surname: "champaneria" },
    { id: 15, name: "raj", surname: "champaneria" },
    { id: 16, name: "raj", surname: "champaneria" },
    { id: 17, name: "raj", surname: "champaneria" },
    { id: 18, name: "raj", surname: "champaneria" },
    { id: 19, name: "raj", surname: "champaneria" },
    { id: 20, name: "raj", surname: "champaneria" },
    { id: 21, name: "raj", surname: "champaneria" },
    { id: 22, name: "raj", surname: "champaneria" },
    { id: 23, name: "raj", surname: "champaneria" },

    { id: 5, name: "raj", surname: "champaneria" },
    { id: 6, name: "raj", surname: "champaneria" },
    { id: 7, name: "raj", surname: "champaneria" },
    { id: 8, name: "raj", surname: "champaneria" },
    { id: 9, name: "raj", surname: "champaneria" },
    { id: 10, name: "raj", surname: "champaneria" },
    { id: 11, name: "raj", surname: "champaneria" },
    { id: 12, name: "raj", surname: "champaneria" },
    { id: 13, name: "raj", surname: "champaneria" },
    { id: 14, name: "raj", surname: "champaneria" },
    { id: 15, name: "raj", surname: "champaneria" },
    { id: 16, name: "raj", surname: "champaneria" },
    { id: 17, name: "raj", surname: "champaneria" },
    { id: 18, name: "raj", surname: "champaneria" },
    { id: 19, name: "raj", surname: "champaneria" },
    { id: 20, name: "raj", surname: "champaneria" },
    { id: 21, name: "raj", surname: "champaneria" },
    { id: 22, name: "raj", surname: "champaneria" },
    { id: 23, name: "raj", surname: "champaneria" },
  ]

  constructor() { }

  ngOnInit(): void {
    this.buttonNum = this.tableArr.length / this.limit;
    for (let index = 1; index <= this.buttonNum + 1; index++) {
      this.btnArr.push(index)
      console.log(this.btnArr);
    }
    console.log(Math.ceil(this.buttonNum));
  }
   specific(data:any){
    console.log(data);

  }

}
