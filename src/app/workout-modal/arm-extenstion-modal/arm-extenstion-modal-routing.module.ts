import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmExtenstionModalPage } from './arm-extenstion-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ArmExtenstionModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmExtenstionModalPageRoutingModule {}
