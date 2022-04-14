import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history.component';
import { DetailEventComponent } from './detail-event/detail-event.component';


const routes: Routes = [
  { path: '', component: HistoryComponent },
  { path: 'details/:id', component: DetailEventComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
