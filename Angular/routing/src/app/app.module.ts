import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { HeaderComponent } from './raj/component/header/header.component';
import { RajModule } from './raj/raj.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    RajModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
