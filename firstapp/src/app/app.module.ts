import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './product/product.module';
import { BeerModule } from './beer/beer.module';
import { AppRoutingModule } from './app.routing-module';
import { TemplateFormComponent } from './template-form-component/template-form-component.component';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductModule,
    BeerModule,
    AppRoutingModule
  ], 

  declarations: [
    AppComponent,
    HomeComponent,
    TemplateFormComponent
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
