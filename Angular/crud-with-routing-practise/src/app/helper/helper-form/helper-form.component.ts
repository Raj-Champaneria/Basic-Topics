import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/helper.service';

@Component({
  selector: 'app-helper-form',
  templateUrl: './helper-form.component.html',
  styleUrls: ['./helper-form.component.css']
})
export class HelperFormComponent implements OnInit {
  public reactiveform!:FormGroup
  constructor(private router:Router,private service:HelperService) { }

  ngOnInit(): void {
    this.reactiveform=new FormGroup({
      name:new FormControl(""),
      age:new FormControl(""),
      experience:new FormControl(""),
      availiblity:new FormControl(""),
      licencse:new FormControl(""),
      email:new FormControl(""),
      password:new FormControl(""),
      confirmpassword:new FormControl("")
    })
  }
  navigateToList(){
    this.router.navigate(["./list"]);
  }
  postData(){
    this.service.post(this.reactiveform.value).subscribe(data=>data)
    this.router.navigate(["./list"]);
  }
}
