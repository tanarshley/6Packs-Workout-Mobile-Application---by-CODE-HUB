import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KneePushUpModalPage } from './knee-push-up-modal.page';

const routes: Routes = [
  {
    path: '',
    component: KneePushUpModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KneePushUpModalPageRoutingModule {}
