import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import {AuthGuard} from './shared/guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(mod => mod.AuthModule) },
  { path: 'pages', component: LayoutComponent, children: [
      { path: '', redirectTo: 'bill', pathMatch: 'full' },
      { path: 'bill', loadChildren: () => import('./pages/bill/bill.module').then(mod => mod.BillModule) },
      { path: 'history', loadChildren: () => import('./pages/history/history.module').then(mod => mod.HistoryModule) },
      { path: 'record', loadChildren: () => import('./pages/record/record.module').then(mod => mod.RecordModule) },
    ], canActivate: [AuthGuard] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
