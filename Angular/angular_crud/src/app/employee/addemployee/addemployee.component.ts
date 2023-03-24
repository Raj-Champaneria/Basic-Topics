import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css'],
  viewProviders: [CrudService]
})
export class AddemployeeComponent implements OnInit {
  employeform!: FormGroup;
  constructor(private service: CrudService,private router:Router) { }
  public tempdata:any;
  public tempdata2:any;
  ngOnInit(): void {
    this.employeform = new FormGroup({
      
      'name': new FormControl(null,Validators.required),
      'field': new FormControl(null),
      'email': new FormControl(null),
      'address': new FormControl(null),
      'contact': new FormControl(null),
      'password': new FormControl(null),
    })
  }

  onsubmit() {
    if(localStorage.length==0){
      console.log(this.employeform.value);
      localStorage.setItem("name",JSON.stringify([this.employeform.value]));
      this.router.navigate(['/empmodule/emplist']);
    }
    else{
      this.tempdata=localStorage.getItem("name"); 
      this.tempdata2=JSON.parse(this.tempdata);
      console.log(this.tempdata2);
      
      this.tempdata2.push(this.employeform.value)
      localStorage.setItem("name",JSON.stringify(this.tempdata2));
      this.router.navigate(['/empmodule/emplist']);
      console.log("data2");
    }
  } 
  

}
