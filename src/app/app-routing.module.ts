import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';


const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(mod => mod.AuthModule) },
  // { path: 'pages', component: LayoutComponent, children: [
  //     { path: '', redirectTo: '/bill', pathMatch: 'full' },
  //     { path: 'bill', loadChildren: () => import('./pages/bill/bill.module').then(mod => mod.BillModule) },
  //   ] },
  { path: 'pages', component: LayoutComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
