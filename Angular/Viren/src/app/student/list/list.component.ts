import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public isActivate:boolean= true
  @Output() myEvent = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  toggleForm(){
    this.myEvent.emit(this.isActivate)
  }
}
