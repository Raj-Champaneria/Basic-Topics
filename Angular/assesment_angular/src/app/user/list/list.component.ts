import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public ispressedbtn:boolean=true

  constructor() { }
  @Output() formopenevent=new EventEmitter
  @Output() editevent=new EventEmitter
  formOpen(){
    this.formopenevent.emit(this.ispressedbtn)
  }
  @Input() userDataIterate:any
  @Output() deleteevent=new EventEmitter

  public searchstring:any=""
  ngOnInit(): void {
  }
  
  deleteUser(deletedid:any){
    this.deleteevent.emit(deletedid)
  }
  
  editUser(editedid:any){
    this.formopenevent.emit(this.ispressedbtn)
    this.editevent.emit(editedid)
  }
}
