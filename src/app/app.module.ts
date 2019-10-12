import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MyUpperPipe } from './product/myUpper.pipe';
import { DiscountPipe } from './product/discount.pipe';
import { MyFilter } from './product/myFilter.pipe';
import { BeerComponent } from './beer/beer.component';
import { BeerFilter } from './beer/beer.pipe';
import { StarComponent } from './shared/star.component';
import { BeerService } from './beer/beer.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BeerComponent,
    MyUpperPipe,
    DiscountPipe,
    MyFilter,
    BeerFilter,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
