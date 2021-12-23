import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerlinScissorChopsPage } from './merlin-scissor-chops.page';

const routes: Routes = [
  {
    path: '',
    component: MerlinScissorChopsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerlinScissorChopsPageRoutingModule {}
