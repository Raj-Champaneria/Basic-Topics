import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { EmplistComponent } from './components/emplist/emplist.component';

const routes: Routes = [

  {path:"",redirectTo:"emplist",pathMatch:"full"},
  {path:"emplist",component:EmplistComponent},
  {path:"addemp",component:AddemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
