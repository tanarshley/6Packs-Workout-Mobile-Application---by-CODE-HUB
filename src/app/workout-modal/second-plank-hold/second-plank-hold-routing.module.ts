import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondPlankHoldPage } from './second-plank-hold.page';

const routes: Routes = [
  {
    path: '',
    component: SecondPlankHoldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondPlankHoldPageRoutingModule {}
