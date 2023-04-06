import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { EmployeeComponent } from './employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchpipePipe } from './pipe/searchpipe.pipe';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    EmployeeComponent,
    SearchpipePipe
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmployeeModule { }
