import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MyUpperPipe } from './myUpper.pipe';
import { DiscountPipe } from './discount.pipe';
import { MyFilter } from './myFilter.pipe';
import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app.routing-module';


@NgModule({
    imports:[
        SharedModule,
        AppRoutingModule
    ],
    declarations:[
        MyUpperPipe,
        DiscountPipe,
        MyFilter,
        ProductComponent
    ]
})

export class ProductModule{

}