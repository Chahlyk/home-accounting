import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./layout/header/header.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { GuardsComponent } from "./guards/guards.component";
import { InterseptorsComponent } from "./interseptors/interseptors.component";



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    GuardsComponent,
    InterseptorsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
