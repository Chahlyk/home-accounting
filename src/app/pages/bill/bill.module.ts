import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillComponent } from './bill.component';
import { BillRoutingModule } from './bill-routing.module';
import {MaterialModule} from '../../shared/material.module';
import { CountComponent } from './count/count.component';
import { RateComponent } from './rate/rate.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    BillComponent,
    CountComponent,
    RateComponent
  ],
  exports: [
    BillComponent
  ],
    imports: [
        CommonModule,
        BillRoutingModule,
        MaterialModule,
        MatTableModule,
    ]
})
export class BillModule { }
