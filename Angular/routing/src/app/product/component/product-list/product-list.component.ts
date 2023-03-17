import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  constructor() {
  }
  public product = [
    { id: 1, name: "laptop", description: "A good Prodcut" },
    { id: 2, name: "Mobile", description: "A good Prodcut" },
    { id: 3, name: "Headphones", description: "A good Prodcut" },
  ];

  ngOnInit(): void {
    console.log(this.product);

  }

}
