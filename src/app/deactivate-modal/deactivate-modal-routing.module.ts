import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeactivateModalPage } from './deactivate-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DeactivateModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeactivateModalPageRoutingModule {}
