import {NgModule} from '@angular/core';
import { BeerFilter } from './beer.pipe';
import { BeerDetailsComponent } from './beerdetails.component';
import { BeerComponent } from './beer.component';
import { BeerService } from './beer.service';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app.routing-module';


@NgModule({
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    declarations: [
        BeerFilter,
        BeerDetailsComponent,
        BeerComponent
    ],
    providers: [BeerService]
})

export class BeerModule{}