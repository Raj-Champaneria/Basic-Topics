import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './formss/compnents/template-form/template-form.component';

const routes: Routes = [
  {path:"formss", loadChildren:()=>import('./formss/formss.module').then(mod=>mod.FormssModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
