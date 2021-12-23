import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElbowPlankHoldsModalPage } from './elbow-plank-holds-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ElbowPlankHoldsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElbowPlankHoldsModalPageRoutingModule {}
