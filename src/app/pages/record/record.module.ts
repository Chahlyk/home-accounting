import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../shared/material.module";
import { RecordComponent } from "./record.component";



@NgModule({
  declarations: [
    RecordComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
  ]
})
export class RecordModule { }
