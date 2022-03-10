import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HistoryComponent} from './history.component';
import {HistoryRoutingModule} from './history-routing.module';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import { DetailEventComponent } from './table/detail-event/detail-event.component';
import {HighchartsChartModule} from 'highcharts-angular';
import {SharedModule} from '../../shared/shared.module';
import {MaterialModule} from '../../shared/material.module';


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
