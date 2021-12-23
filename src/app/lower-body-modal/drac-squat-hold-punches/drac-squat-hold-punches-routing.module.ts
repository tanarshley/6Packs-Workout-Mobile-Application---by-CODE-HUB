import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DracSquatHoldPunchesPage } from './drac-squat-hold-punches.page';

const routes: Routes = [
  {
    path: '',
    component: DracSquatHoldPunchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DracSquatHoldPunchesPageRoutingModule {}
