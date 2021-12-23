import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BroccoliModalPage } from './broccoli-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BroccoliModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BroccoliModalPageRoutingModule {}
