import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillComponent } from './bill.component';
import { BillRoutingModule } from './bill-routing.module';


@NgModule({
    declarations: [
        BillComponent
    ],
    exports: [
        BillComponent
    ],
    imports: [
        CommonModule,
        BillRoutingModule,
    ]
})
export class BillModule { }
