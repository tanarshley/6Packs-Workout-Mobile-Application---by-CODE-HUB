import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JumpSquatPage } from './jump-squat.page';

const routes: Routes = [
  {
    path: '',
    component: JumpSquatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JumpSquatPageRoutingModule {}
