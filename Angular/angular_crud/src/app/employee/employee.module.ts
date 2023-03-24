import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmplistComponent,
    EmpdetailsComponent,
    AddemployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
