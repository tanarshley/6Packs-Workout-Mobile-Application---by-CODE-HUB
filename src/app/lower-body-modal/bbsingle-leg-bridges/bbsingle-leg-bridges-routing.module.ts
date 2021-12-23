import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BBsingleLegBridgesPage } from './bbsingle-leg-bridges.page';

const routes: Routes = [
  {
    path: '',
    component: BBsingleLegBridgesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BBsingleLegBridgesPageRoutingModule {}
