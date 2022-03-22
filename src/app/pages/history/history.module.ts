import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { HistoryRoutingModule } from './history-routing.module';
import { TableComponent } from './table/table.component';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MaterialModule } from '../../shared/material.module';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    HistoryComponent,
    ChartComponent,
    TableComponent,
    DetailEventComponent
  ],
  exports: [
    HistoryComponent,
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    MaterialModule,
    HighchartsChartModule
  ]
})
export class HistoryModule { }
