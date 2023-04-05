import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { StudentComponent } from './student.component';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
