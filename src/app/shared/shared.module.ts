import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./layout/header/header.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { GuardsComponent } from "./guards/guards.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FirstInterceptor } from "./interceptors/first.interceptor";



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    GuardsComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: FirstInterceptor,
    multi: true,
  }]
})
export class SharedModule { }
