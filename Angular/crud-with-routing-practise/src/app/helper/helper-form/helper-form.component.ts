import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/helper.service';

@Component({
  selector: 'app-helper-form',
  templateUrl: './helper-form.component.html',
  styleUrls: ['./helper-form.component.css']
})
export class HelperFormComponent implements OnInit {
  public reactiveform!: FormGroup
  public changebtn: any = "Submit"
  public helperid: any
  public editHelper: any
  public toggle:boolean=true
  id: any;
  license:string[]=[ 'LMV','MCWG','SUV','HLV']
  constructor(private router: Router, private service: HelperService, private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.reactiveform = new FormGroup({
      name: new FormControl("",Validators.required),
      age: new FormControl("",Validators.required),
      experience: new FormControl("",Validators.required),
      availiblity: new FormControl("",Validators.required),
      email: new FormControl("",Validators.required),
      password: new FormControl("",Validators.required),
      confirmpassword: new FormControl("",Validators.required),
      acceptform:new FormControl(false,Validators.requiredTrue),
      license:new FormArray([],[Validators.required])
    })
    this.helperid = this.routes.snapshot.paramMap.get('id')
    if (this.helperid!=" ") {
      this.service.getHelperbyId(this.helperid).subscribe(res => {
        this.editHelper = res;
        this.reactiveform.setValue({
          name: this.editHelper.name,
          age: this.editHelper.age,
          experience: this.editHelper.experience,
          availiblity: this.editHelper.availiblity,
          license:new FormArray([],[Validators.required]),
          email: this.editHelper.email,
          password: this.editHelper.password,
          confirmpassword: this.editHelper.confirmpassword,
          acceptform:new FormControl(false,Validators.requiredTrue),
        })
      })
      this.changebtn="update"
      this.toggle=false
    }

  }
  onChange(e:any){
    const checkedValue=e.target.value;
    const checked=e.target.checked;
    const checkedArray=this.reactiveform.get('license') as FormArray;

    if(checked){
      checkedArray.push(new FormControl(checkedValue))
    }
    else{
        let i:number=0;
        checkedArray.controls.forEach((item)=>{
          if(item.value==checkedValue){
            checkedArray.removeAt(i)
          }
          i++;
        })
    }
  }
  navigateToList() {
    this.router.navigate(["./list"]);
  }
  postData() {
    this.service.post(this.reactiveform.value).subscribe(data => console.log(data))
    this.service.getHelper().subscribe(data=>data)
    this.router.navigate(["./list"]);
  }
  EditHelper(){
    this.service.putData(this.helperid,this.reactiveform.value).subscribe(data=>data)
    this.service.getHelper().subscribe(data=>data)
    this.router.navigate(["./list"]);
  }
 
}
