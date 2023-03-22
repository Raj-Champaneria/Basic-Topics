import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './compnents/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './compnents/template-form/template-form.component';

const routes: Routes = [
{path:"template" ,component:TemplateFormComponent},
{path:"reactive" ,component:ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormssRoutingModule { }
