import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './record.component';
import { RecordRoutingModule } from './record-routing.module';
import { CategoryTableComponent } from './category-table/category-table.component';
import { MaterialModule } from '../../shared/material.module';
import { AddEventComponent } from './add-event/add-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';


@NgModule({
  declarations: [
    RecordComponent,
    CategoryTableComponent,
    AddEventComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent
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
