import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DracJumpSquatPage } from './drac-jump-squat.page';

const routes: Routes = [
  {
    path: '',
    component: DracJumpSquatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DracJumpSquatPageRoutingModule {}
