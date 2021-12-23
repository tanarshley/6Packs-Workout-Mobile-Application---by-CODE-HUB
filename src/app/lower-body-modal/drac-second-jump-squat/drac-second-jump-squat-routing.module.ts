import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DracSecondJumpSquatPage } from './drac-second-jump-squat.page';

const routes: Routes = [
  {
    path: '',
    component: DracSecondJumpSquatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DracSecondJumpSquatPageRoutingModule {}
