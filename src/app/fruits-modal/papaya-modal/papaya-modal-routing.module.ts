import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PapayaModalPage } from './papaya-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PapayaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PapayaModalPageRoutingModule {}
