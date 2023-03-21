import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"kids",loadChildren:()=>import('./kids/kids.module').then(mod=>mod.KidsModule)},
  {path:"men",loadChildren:()=>import('./men/men.module').then(mod=>mod.MenModule)},
  {path:"women",loadChildren:()=>import('./women/women.module').then(mod=>mod.WomenModule)},
  {path:"table",loadChildren:()=>import('./table/table.module').then(mod=>mod.TableModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
