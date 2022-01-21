import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../shared/material.module";
import { BillComponent } from "./bill.component";
import { MatTableModule } from "@angular/material/table";



@NgModule( {
  declarations: [
    BillComponent
  ],
  exports: [
    BillComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    MatTableModule,
  ]
})
export class BillModule { }
