import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerlinArmScissorPage } from './merlin-arm-scissor.page';

const routes: Routes = [
  {
    path: '',
    component: MerlinArmScissorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerlinArmScissorPageRoutingModule {}
