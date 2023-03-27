import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';



@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  length: any;


  constructor(private service:CrudService,private router:Router) { }
  public empreactiveform!:FormGroup ;
  ngOnInit(): void {
    this.empreactiveform=new FormGroup({
      'id':new FormControl(this.length + 1 ),
      'name':new FormControl("",Validators.required),
      'salary':new FormControl("",Validators.required),
      'technology':new FormControl("",Validators.required),
      'email':new FormControl("",Validators.required),
      'contact':new FormControl("",Validators.required),
      'password':new FormControl("",Validators.required),
      'confirm_password':new FormControl("",Validators.required)
    })
  }
  onSubmit(){
    this.service.addemp(this.empreactiveform.value)
    this.router.navigate(['/EmployeeModule/emplist'])
  }
}
