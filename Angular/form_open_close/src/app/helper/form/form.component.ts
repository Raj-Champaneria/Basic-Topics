import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit,OnChanges {
  public togglebutton="submit"
  public closebtn: boolean = false
  @Output() closeevent = new EventEmitter
  chengebutton:boolean=true
  data: any;

  constructor() { }
  public helperform!:FormGroup

  @Output() postevent=new EventEmitter
  @Output() editEventbody =new EventEmitter

  @Input() editedData:any
  ngOnInit(): void {
    
    this.helperform=new FormGroup({
      'name':new FormControl(''),
      'age':new FormControl(''),
      'field':new FormControl(''),
      'email':new FormControl(''),
      })
      this.togglebutton="submit"
     
  }
  ngOnChanges(){
    if(this.editedData){
      console.log(this.editedData);
      this.helperform.setValue({
        'name':this.editedData.name,
        'age':this.editedData.age,
        'field':this.editedData.field,
        'email':this.editedData.email,
      })
      this.togglebutton="update"
      this.chengebutton=false
    }
  }
  
  closeform() {
    this.closeevent.emit(this.closebtn)
  }

  postData(){
    this.postevent.emit(this.helperform.value)
  }

  updateData(){
   this.editEventbody.emit(this.helperform.value)
  }

  // setValue(data:any){
  //   this.helperform=new FormGroup({
  //     'name':this.data.name,
  //     'age':this.data.age,
  //     'field':this.data.field,
  //     'email':this.data.email,
      
  //   })
  // }
}
