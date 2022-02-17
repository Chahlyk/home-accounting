import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HistoryComponent} from './history.component';
import {HistoryRoutingModule} from './history-routing.module';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import {MaterialModule} from '../../shared/material.module';


@NgModule({
  declarations: [
    HistoryComponent,
    ChartComponent,
    TableComponent
  ],
  exports: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    MaterialModule
  ]
})
export class HistoryModule { }
