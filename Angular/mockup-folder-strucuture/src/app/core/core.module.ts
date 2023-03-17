import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SidebarComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }
