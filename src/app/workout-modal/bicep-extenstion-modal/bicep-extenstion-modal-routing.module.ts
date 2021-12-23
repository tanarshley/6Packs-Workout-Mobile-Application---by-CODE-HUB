import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BicepExtenstionModalPage } from './bicep-extenstion-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BicepExtenstionModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BicepExtenstionModalPageRoutingModule {}
