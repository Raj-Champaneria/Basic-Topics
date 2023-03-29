import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [

  {path:"",redirectTo:"/product-list",pathMatch:"full"},
  {path:"product-list", component:ProductListComponent},
  {path:"product-crud/:id", component:ProductCrudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
