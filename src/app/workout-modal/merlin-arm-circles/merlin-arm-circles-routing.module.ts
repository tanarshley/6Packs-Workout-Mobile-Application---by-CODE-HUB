import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerlinArmCirclesPage } from './merlin-arm-circles.page';

const routes: Routes = [
  {
    path: '',
    component: MerlinArmCirclesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerlinArmCirclesPageRoutingModule {}
