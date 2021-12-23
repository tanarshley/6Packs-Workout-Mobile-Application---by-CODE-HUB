import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SideShoulderTapModalPage } from './side-shoulder-tap-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SideShoulderTapModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideShoulderTapModalPageRoutingModule {}
