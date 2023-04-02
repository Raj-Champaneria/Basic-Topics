import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelperFormComponent } from './helper-form/helper-form.component';
import { HelperListComponent } from './helper-list/helper-list.component';

const routes: Routes = [
  {path:"",redirectTo:"list",pathMatch:"full"},
  {path:"list",component:HelperListComponent},
  {path:"form/:id",component:HelperFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelperRoutingModule { }
