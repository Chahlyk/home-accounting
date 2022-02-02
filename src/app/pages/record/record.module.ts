import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecordComponent} from './record.component';
import {RecordRoutingModule} from './record-routing.module';


@NgModule({
  declarations: [
    RecordComponent
  ],
  exports: [
    RecordComponent
  ],
  imports: [
    CommonModule,
    RecordRoutingModule
  ]
})
export class RecordModule { }
