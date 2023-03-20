import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RajRoutingModule } from './raj-routing.module';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { SupportComponent } from './component/support/support.component';
import { ContactComponent } from './component/contact/contact.component';
import { EmpDetailsComponent } from './component/emp-details/emp-details.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SupportComponent,
    ContactComponent,
    EmpDetailsComponent
  ],
  imports: [
    CommonModule,
    RajRoutingModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class RajModule { }
