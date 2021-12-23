import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PushUpShoulderTapsPage } from './push-up-shoulder-taps.page';

const routes: Routes = [
  {
    path: '',
    component: PushUpShoulderTapsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PushUpShoulderTapsPageRoutingModule {}
