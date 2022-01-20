import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BillComponent } from "./pages/bill/bill.component";
import { HistoryComponent } from "./pages/history/history.component";
import { RecordComponent } from "./pages/record/record.component";



const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(mod => mod.AuthModule) },
  { path: 'bill', component: BillComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'record', component: RecordComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
