import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./layout/header/header.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { GuardsComponent } from "./guards/guards.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { FirstInterceptor } from "./interceptors/first.interceptor";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";

const INTERCEPTOR_PROVIDER: Provider = { // <=== здесь
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
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent
  ],
  providers: [ INTERCEPTOR_PROVIDER ]
})
export class SharedModule { }
