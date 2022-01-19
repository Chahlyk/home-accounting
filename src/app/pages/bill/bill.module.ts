import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../shared/material.module";
import { BillComponent } from "./bill.component";



@NgModule({
  declarations: [
    BillComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
  ]
})
export class BillModule { }
