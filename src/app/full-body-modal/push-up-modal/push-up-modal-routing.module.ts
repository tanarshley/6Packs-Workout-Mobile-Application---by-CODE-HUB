import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PushUpModalPage } from './push-up-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PushUpModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PushUpModalPageRoutingModule {}
