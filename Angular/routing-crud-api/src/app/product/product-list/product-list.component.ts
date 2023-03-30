import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  
})
export class ProductListComponent implements OnInit {
  product: any;
  data: any;

  constructor(private service:ProductService,private router:Router) { }

  searchstring:any=""

  ngOnInit(): void {
    this.service.getData().subscribe((response:any)=>this.product=response)
  }
  removeProduct(id:any){
    this.service.delete(id).subscribe((res)=>console.log("deleted"))
    this.router.navigate(['/product-list'])
    this.service.getData().subscribe((response:any)=>this.product=response)
  }
  edit(id:any){
      this.router.navigate(['/product-crud', id])
  }
  navigateproduct(){
    this.router.navigate(['/product-crud'," "])
  }
} 
