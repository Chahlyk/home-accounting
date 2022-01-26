import { BillComponent } from './bill.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillGuard } from '../../shared/guards/bill.guard';


const routes: Routes = [
  { path: 'bill', component: BillComponent, canActivate: [BillGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillRoutingModule { }
