import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./layout/header/header.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { GuardsComponent } from "./guards/guards.component";
import { InterceptorsComponent } from "./interceptors/interceptors.component";



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    GuardsComponent,
    InterceptorsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
