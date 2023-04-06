import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit,OnChanges {
  @Output() closeformevent=new EventEmitter
  @Output() postevent=new EventEmitter
  public changebutton: any;
  public togglebutton:any=true
 
  constructor() { } 
  public reactiveform!:FormGroup
  public ispressed:boolean=false
  @Input() editedData:any
  @Output() updateevent=new EventEmitter
  ngOnInit(): void {
    this.reactiveform=new FormGroup({
      'name':new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z_ ]{3,19}$/ )]),
      'description':new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9_ ]{3,150}$/ )]),
      'status':new FormControl('',Validators.required),
      'rate':new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{1,}$/ )]),
      'balance':new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{1,}$/ )]),
    })
   this.changebutton="Save"
   this.togglebutton=true
  }
  ngOnChanges(){
    if(this.editedData){
      this.reactiveform.setValue({
        'name':this.editedData.name,
        'description':this.editedData.description,
        'status':this.editedData.status,
        'rate':this.editedData.rate,
        'balance':this.editedData.balance
      })
      this.changebutton="UPDATE"
      this.togglebutton=false
    }
  
  }
  postEmployeeData(){
    this.postevent.emit(this.reactiveform.value)
  }

  closeform(){
    this.closeformevent.emit(this.ispressed)
    console.log("hiii");
  }

  UpdateEmployeeData(){
    this.updateevent.emit(this.reactiveform.value)
  }
}
