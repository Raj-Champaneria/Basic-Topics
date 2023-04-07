import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public ispressedbtn:boolean=true

 
  @Output() formopenevent=new EventEmitter
  @Output() editevent=new EventEmitter


  constructor() { }
  formOpen(){
    this.formopenevent.emit(this.ispressedbtn)
  }

  public dropdown=[
    {id:1,name:"Open"},
    {id:2,name:"Error"},
    {id:3,name:"Success"},
    {id:4,name:"Inactive"}
  ]

  @Input() userDataIterate:any
  @Output() deleteevent=new EventEmitter

  public searchstring:any=""

  public filterval:any
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
