import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit,OnChanges {
  @Input() editeddata:any
  @Output() closeformevent=new EventEmitter
  @Output() postDataEvent=new EventEmitter
  @Output() updateevent=new EventEmitter
  public ispressed=false
  public togglebtn:any
  public toggleFunc:any
  constructor() { }
  public employeform!:FormGroup
 
  closeform(){
    this.closeformevent.emit(this.ispressed)
  }
  ngOnInit(): void {
    this.employeform=new FormGroup({
      'fname':new FormControl(''),
      'lname':new FormControl(''),
    })
    this.togglebtn="submit"
    this.toggleFunc=true
  }

  ngOnChanges(){
    if(this.editeddata){
      this.employeform.setValue({
      'fname':this.editeddata.fname,
      'lname':this.editeddata.lname
      })
      this.togglebtn="update"
      this.toggleFunc=false
    }
  }
  postEmployeeData(){
    this.postDataEvent.emit(this.employeform.value)
  }

  updateEmployeeData(){
    this.updateevent.emit(this.employeform.value)
  }
}
