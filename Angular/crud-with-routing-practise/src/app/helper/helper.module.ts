import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelperRoutingModule } from './helper-routing.module';
import { HelperFormComponent } from './helper-form/helper-form.component';
import { HelperListComponent } from './helper-list/helper-list.component';
import { SearchpipePipe } from './pipe/searchpipe.pipe';
import {ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HelperFormComponent,
    HelperListComponent,
    SearchpipePipe
  ],
  imports: [
    CommonModule,
    HelperRoutingModule,
    ReactiveFormsModule
  ]
})
export class HelperModule { }
