import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './record.component';
import { RecordRoutingModule } from './record-routing.module';
import { CategoryTableComponent } from './category-table/category-table.component';
import { MaterialModule } from '../../shared/material.module';


@NgModule({
  declarations: [
    RecordComponent,
    CategoryTableComponent
  ],
  exports: [
    RecordComponent
  ],
    imports: [
    CommonModule,
    RecordRoutingModule,
    MaterialModule
    ]
})
export class RecordModule { }
