import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  rajreactiveform!:FormGroup ;

  constructor() { }

  ngOnInit(): void {
    this. rajreactiveform=new FormGroup({
      'address-Group':new FormGroup({
        'address1':new FormControl(null,Validators.required),
        'address2':new FormControl(null,Validators.required)
      }),
      'firstname':new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9]{1,19}$/ )]),
      'email':new FormControl(null,[Validators.required,Validators.pattern(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/)]),
      'password':new FormControl(null,[Validators.pattern(/[0-9a-zA-Z]{6,}/),Validators.required]),
      'confirmPassword':new FormControl(null,Validators.required),
      'hobbies':new FormArray ([new FormControl(null,Validators.required)])
    })
  }
  public id:any
  get hobbyControls(){
    return (<FormArray>this.rajreactiveform.get('hobbies')).controls
  }
  addHobbies(){
    (<FormArray>this.rajreactiveform.get('hobbies')).push(new FormControl(null,Validators.required))
  }
  removeHobbies(id:number){
   if(this.hobbyControls.length>1){
    (<FormArray>this.rajreactiveform.get('hobbies')).removeAt(id)
   }
   else{
    (<FormArray>this.rajreactiveform.get('hobbies')).reset()
   }
  }
  limitadd(){
    if(this.hobbyControls.length>3){
      return true
    }
    else{
      return false
    }
  }
  onSubmit(){
    console.log(this.rajreactiveform  )
  }

}
