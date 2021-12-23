import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BBlungeStepUpsPage } from './bblunge-step-ups.page';

const routes: Routes = [
  {
    path: '',
    component: BBlungeStepUpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BBlungeStepUpsPageRoutingModule {}
