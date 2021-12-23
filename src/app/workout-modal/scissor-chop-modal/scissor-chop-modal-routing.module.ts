import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScissorChopModalPage } from './scissor-chop-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ScissorChopModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScissorChopModalPageRoutingModule {}
