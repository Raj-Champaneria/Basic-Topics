import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/component/product-list/product-list.component';
import { ProductDetailsComponent } from './product/component/product-details/product-details.component';
import { EmployeeComponent } from './product/component/employee/employee.component';
import { EmployeeDetailsComponent } from './product/component/employee-details/employee-details.component';
import { AuthService } from './core/auth.service';

const routes: Routes = [
  {path:"productlist" ,component:ProductListComponent},
  {path:"productDetails/:id" ,component:ProductDetailsComponent},
  {path:"employeelist" ,component:EmployeeComponent},
  {path:"employeeDetail/:salary" ,component:EmployeeDetailsComponent,canActivate:[AuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
