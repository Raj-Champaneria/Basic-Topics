import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() helperlistiterate: any
  @Output() toggleButton = new EventEmitter()
  @Output() deleteEvent=new EventEmitter()
  @Output() editEvent=new EventEmitter()
  toggle: boolean = true
  constructor() { }
  
  ngOnInit(): void {

  }
  callingform() {
    this.toggleButton.emit(this.toggle)
  }
 
  toggleformOnEdit(id:any){
    this.toggleButton.emit(this.toggle)
  }

  DeleteUser(id:any){
    this.deleteEvent.emit(id)
  }

  EditUser(id:any){
    this.editEvent.emit(id)
  }
}
