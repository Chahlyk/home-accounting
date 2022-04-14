import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './record.component';
import { RecordRoutingModule } from './record-routing.module';
import { CategoryTableComponent } from './category-table/category-table.component';
import { MaterialModule } from '../../shared/material.module';
import { AddEventComponent } from './add-event/add-event.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RecordComponent,
    CategoryTableComponent,
    AddEventComponent
  ],
  exports: [
    RecordComponent
  ],
  imports: [
    CommonModule,
    RecordRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class RecordModule { }
