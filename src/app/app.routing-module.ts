import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { BeerComponent } from './beer/beer.component';
import { BeerDetailsComponent } from './beer/beerdetails.component';
import { NotFoundComponent } from './shared/notFound.component';
import { BeerRouterGaurds } from './beer/beer.router-gaurd';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductComponent},
    {path: 'beers', component: BeerComponent},
    {path: 'beers/:id', canActivate: [BeerRouterGaurds], component: BeerDetailsComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        BeerRouterGaurds
    ]
})

export class AppRoutingModule{

}