import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HistoryComponent} from './history.component';
import {HistoryRoutingModule} from './history-routing.module';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import {MaterialModule} from '../../shared/material.module';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';


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
    MaterialModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class HistoryModule { }
