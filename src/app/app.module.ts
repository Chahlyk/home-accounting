import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from "./shared/material.module";
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { AuthModule } from "./pages/auth/auth.module";
import { BillModule } from "./pages/bill/bill.module";
import { HistoryModule } from "./pages/history/history.module";
import { RecordModule } from "./pages/record/record.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MaterialModule,
    SharedModule,
    AuthModule,
    BillModule,
    HistoryModule,
    RecordModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
