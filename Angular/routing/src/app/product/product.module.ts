import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    EmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
