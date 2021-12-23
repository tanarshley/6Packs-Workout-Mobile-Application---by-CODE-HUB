import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SideLegRaiseModalPage } from './side-leg-raise-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SideLegRaiseModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideLegRaiseModalPageRoutingModule {}
