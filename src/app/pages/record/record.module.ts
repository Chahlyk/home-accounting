import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecordComponent} from './record.component';
import {RecordRoutingModule} from './record-routing.module';
import { MaterialModule } from '../../shared/material.module';
import { CategoryTableComponent } from './category-table/category-table.component';
import { MatRadioModule } from '@angular/material/radio';
import { AddEventComponent } from './add-event/add-event.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RecordComponent,
    CategoryTableComponent,
    AddEventComponent,
    AddCategoryComponent,
    DeleteCategoryComponent,
    EditCategoryComponent
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
