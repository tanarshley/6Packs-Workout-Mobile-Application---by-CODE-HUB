import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PineappleModalPage } from './pineapple-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PineappleModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PineappleModalPageRoutingModule {}
