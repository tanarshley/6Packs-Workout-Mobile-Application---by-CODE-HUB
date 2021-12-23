import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondKneePushUpModalPage } from './second-knee-push-up-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SecondKneePushUpModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondKneePushUpModalPageRoutingModule {}
