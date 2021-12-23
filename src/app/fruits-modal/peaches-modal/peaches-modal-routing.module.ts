import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeachesModalPage } from './peaches-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PeachesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeachesModalPageRoutingModule {}
