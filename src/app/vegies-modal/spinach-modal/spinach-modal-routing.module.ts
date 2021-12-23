import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpinachModalPage } from './spinach-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SpinachModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpinachModalPageRoutingModule {}
