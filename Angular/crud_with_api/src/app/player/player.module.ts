import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
   PlayerFormComponent,
   PlayerListComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    PlayerFormComponent,
    PlayerListComponent
  ]
})
export class PlayerModule { }
