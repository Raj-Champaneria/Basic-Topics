import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeModule } from './employee/employee.module';

const routes: Routes = [
  {path:"EmployeeModule",loadChildren:()=>import('./employee/employee.module').then(mod=>mod.EmployeeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
