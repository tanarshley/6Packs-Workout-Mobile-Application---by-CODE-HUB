import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WideSquatPunchesPage } from './wide-squat-punches.page';

const routes: Routes = [
  {
    path: '',
    component: WideSquatPunchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WideSquatPunchesPageRoutingModule {}
