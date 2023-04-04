import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';




@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit,OnChanges {

  @Input() id:any;
  @Input() name:any;
  @Input() email:any;
  @Input() age:any;
 
  public userreactiveform!:FormGroup
  public togglebutton="SUBMIT"
  public update:boolean=true
  constructor(private service:UserService) { }
  ngOnChanges(){
      if(this.id!=undefined){
        this.userreactiveform.setValue({
          name:this.name,
          email:this.email,
          age:this.age
        })
        this.togglebutton="Update"
       this.update=false
      }
  }
  ngOnInit(): void {
    this.userreactiveform=new FormGroup({
      name:new FormControl("",Validators.required),
      age:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required)
    })
  }
  onClick(){
    this.service.postUserData(this.userreactiveform.value).subscribe(data=>data)
    this.service.getUserData().subscribe(res=>res)
  }

  updateUser(){
    this.service.updateUser(this.id,this.userreactiveform.value).subscribe((res)=>res)
  }
}
