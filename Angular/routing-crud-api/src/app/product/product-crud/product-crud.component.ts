import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
  id: any;
  editproduct: any;
  changebtn:any="submit"
  changeButton:boolean=true
  constructor(private service:ProductService,private router:ActivatedRoute,private routes:Router) { }
  public productreactiveform!:FormGroup;

 
  ngOnInit(): void {
    this.productreactiveform=new FormGroup({
      name:new FormControl(null,Validators.required),
      descripion:new FormControl(null,Validators.required),
      manufacturer_year:new FormControl(null,Validators.required),
      category:new FormControl(null,Validators.required)
    }) 
    this.id=this.router.snapshot.paramMap.get('id')
if (this.id !=" ") {
  this.service.getbyId(this.id).subscribe(
    res=>{this.editproduct=res;
    this.productreactiveform.setValue({
    name:this.editproduct.name,
    descripion:this.editproduct.descripion,
    manufacturer_year:this.editproduct.manufacturer_year,
    category: this.editproduct.category,
  })
  })
  this.changebtn="update"
  this.changeButton=false

}
  }
  addUser(){
    this.service.postData(this.productreactiveform.value).subscribe(data=>data)
  }
  editProduct(){
    this.service.putData(this.id,this.productreactiveform.value).subscribe(data=>data)
    this.routes.navigate(['product-list'])
  }
}
