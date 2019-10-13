import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MyUpperPipe } from './product/myUpper.pipe';
import { DiscountPipe } from './product/discount.pipe';
import { MyFilter } from './product/myFilter.pipe';
import { BeerComponent } from './beer/beer.component';
import { BeerFilter } from './beer/beer.pipe';
import { StarComponent } from './shared/star.component';
import { BeerService } from './beer/beer.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/notFound.component';
import { BeerDetailsComponent } from './beer/beerdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BeerComponent,
    MyUpperPipe,
    DiscountPipe,
    MyFilter,
    BeerFilter,
    StarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'product', component: ProductComponent},
      {path: 'beers', component: BeerComponent},
      {path: 'beers/:id', component: BeerDetailsComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
