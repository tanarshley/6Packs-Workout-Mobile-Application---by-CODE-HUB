import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SquatModalPage } from './squat-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SquatModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SquatModalPageRoutingModule {}
