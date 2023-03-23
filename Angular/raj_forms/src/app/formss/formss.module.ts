import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormssRoutingModule } from './formss-routing.module';
import { TemplateFormComponent } from './compnents/template-form/template-form.component';
import { ReactiveFormComponent } from './compnents/reactive-form/reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormssRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormssModule { }
