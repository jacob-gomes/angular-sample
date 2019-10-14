import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NotFoundComponent } from './notFound.component';
import { StarComponent } from './star.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        NotFoundComponent,
        StarComponent
    ],
    providers: [],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent
    ]
})

export class SharedModule{}