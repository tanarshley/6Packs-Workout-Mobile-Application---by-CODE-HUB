import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WideSquatPage } from './wide-squat.page';

const routes: Routes = [
  {
    path: '',
    component: WideSquatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WideSquatPageRoutingModule {}
