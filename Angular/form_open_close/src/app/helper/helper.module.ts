import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelperRoutingModule } from './helper-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { HelperComponent } from './helper.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    HelperComponent
  ],
  imports: [
    CommonModule,
    HelperRoutingModule,
    ReactiveFormsModule
  ]
})
export class HelperModule { }
