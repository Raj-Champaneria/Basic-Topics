import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() openFormevent =new EventEmitter
  @Output() deleteevent=new EventEmitter
  @Output() editevent = new EventEmitter
  public ispressedbtn:boolean=true
 public searchstring:any=""
  @Input() emplistiterate: any;

  constructor(private service:EmployeeService) { }
  ispressed(){
    this.openFormevent.emit(this.ispressedbtn)
  }
  ngOnInit(): void {
    
  }
  
  DeleteEmployee(id:any){
    this.deleteevent.emit(id)
  }

  EditEmployee(id:any){
    this.editevent.emit(id)
  }

  clickOnEdit(id:any){
    this.openFormevent.emit(this.ispressedbtn)
  }
}
