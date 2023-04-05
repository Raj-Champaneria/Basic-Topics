import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './component/list/list.component';
import { FormComponent } from './component/form/form.component';

const routes: Routes = [
  {path:"",redirectTo:"list",pathMatch:"full"},
  {path:"list",component:ListComponent},
  {path:"form",component:FormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
