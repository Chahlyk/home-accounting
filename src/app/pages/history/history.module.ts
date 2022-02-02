import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HistoryComponent} from './history.component';
import {HistoryRoutingModule} from './history-routing.module';


@NgModule({
  declarations: [
    HistoryComponent
  ],
  exports: [
    HistoryComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
  ]
})
export class HistoryModule { }
