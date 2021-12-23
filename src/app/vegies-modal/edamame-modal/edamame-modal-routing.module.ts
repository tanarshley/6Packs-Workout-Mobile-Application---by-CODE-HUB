import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdamameModalPage } from './edamame-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EdamameModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdamameModalPageRoutingModule {}
