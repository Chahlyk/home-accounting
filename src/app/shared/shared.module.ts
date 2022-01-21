import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./layout/header/header.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { GuardsComponent } from "./guards/guards.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FirstInterceptor } from "./interceptors/first.interceptor";
import { MaterialModule } from "./material.module";
import { AppRoutingModule } from "../app-routing.module";

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FirstInterceptor,
  multi: true
}

@NgModule( {
  declarations: [
    HeaderComponent,
    SidebarComponent,
    GuardsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ],
  providers: [ INTERCEPTOR_PROVIDER ]
})
export class SharedModule { }
