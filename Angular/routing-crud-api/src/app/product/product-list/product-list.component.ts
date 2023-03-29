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

  ngOnInit(): void {
    this.service.getData().subscribe((response:any)=>this.product=response)
  }
  removeProduct(id:any){
    this.service.delete(id).subscribe(data=>data)
    this.service.getData().subscribe((response:any)=>this.product=response)
  }
  edit(id:any){
      this.router.navigate(['/product-crud', id])
  }
  navigateproduct(){
    this.router.navigate(['/product-crud'," "])
  }
} 
