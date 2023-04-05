import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HelperComponent } from './helper.component';

const routes: Routes = [
  {path:"",redirectTo:"helper",pathMatch:"full"},
  {path:"helper",component:HelperComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelperRoutingModule { }
