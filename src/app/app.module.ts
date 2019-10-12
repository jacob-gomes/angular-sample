import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MyUpperPipe } from './product/myUpper.pipe';
import { DiscountPipe } from './product/discount.pipe';
import { MyFilter } from './product/myFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MyUpperPipe,
    DiscountPipe,
    MyFilter
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
