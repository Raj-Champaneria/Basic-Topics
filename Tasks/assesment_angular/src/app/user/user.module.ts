import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipe/search.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import { FilterPipe } from './pipe/filter.pipe';



@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    UserComponent,
    SearchPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule
  ]
})
export class UserModule { }
