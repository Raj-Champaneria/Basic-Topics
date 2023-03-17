import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './component/search/search.component';
import { SearchPipe } from './pipe/search.pipe';



@NgModule({
  declarations: [
    SearchComponent,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchPipe
  ]
})
export class SharedModule { }
