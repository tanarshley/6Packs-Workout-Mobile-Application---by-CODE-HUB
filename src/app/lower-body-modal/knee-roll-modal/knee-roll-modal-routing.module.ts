import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KneeRollModalPage } from './knee-roll-modal.page';

const routes: Routes = [
  {
    path: '',
    component: KneeRollModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KneeRollModalPageRoutingModule {}
