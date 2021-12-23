import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmScissorModalPage } from './arm-scissor-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ArmScissorModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmScissorModalPageRoutingModule {}
