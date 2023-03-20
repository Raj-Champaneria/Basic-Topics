import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/component/product-list/product-list.component';
import { ProductDetailsComponent } from './product/component/product-details/product-details.component';
import { EmployeeComponent } from './product/component/employee/employee.component';
import { EmployeeDetailsComponent } from './product/component/employee-details/employee-details.component';
import { AuthService } from './core/auth.service';
import { HomeComponent } from './raj/component/home/home.component';
import { AboutComponent } from './raj/component/about/about.component';
import { ContactComponent } from './raj/component/contact/contact.component';
import { SupportComponent } from './raj/component/support/support.component';
import { EmpDetailsComponent } from './raj/component/emp-details/emp-details.component';

const routes: Routes = [
  {path:"productlist" ,component:ProductListComponent},
  {path:"productDetails/:id" ,component:ProductDetailsComponent},
  {path:"employeelist" ,component:EmployeeComponent},
  {path:"employeeDetail/:salary" ,component:EmployeeDetailsComponent,canActivate:[AuthService]},
  {path:"home" ,component:HomeComponent,pathMatch:"full"},
  {path:"about" ,component:AboutComponent},
  {path:"contact" ,component:ContactComponent},
  {path:"support" ,component:SupportComponent},
  {path:"empdetails/:id",component:EmpDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
