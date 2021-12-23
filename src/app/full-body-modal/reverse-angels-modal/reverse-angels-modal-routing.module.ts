import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReverseAngelsModalPage } from './reverse-angels-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ReverseAngelsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReverseAngelsModalPageRoutingModule {}
