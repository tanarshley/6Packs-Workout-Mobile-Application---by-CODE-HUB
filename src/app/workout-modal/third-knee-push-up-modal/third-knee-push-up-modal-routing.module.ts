import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThirdKneePushUpModalPage } from './third-knee-push-up-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ThirdKneePushUpModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdKneePushUpModalPageRoutingModule {}
