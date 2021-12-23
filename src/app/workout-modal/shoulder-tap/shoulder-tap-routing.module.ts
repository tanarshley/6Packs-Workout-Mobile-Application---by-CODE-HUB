import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoulderTapPage } from './shoulder-tap.page';

const routes: Routes = [
  {
    path: '',
    component: ShoulderTapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoulderTapPageRoutingModule {}
