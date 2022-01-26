import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FirstInterceptor } from './interceptors/first.interceptor';
import { MaterialModule } from './material.module';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FirstInterceptor,
  multi: true
};

@NgModule( {
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    LayoutComponent,
  ],
  providers: [ INTERCEPTOR_PROVIDER ]
})
export class SharedModule { }
