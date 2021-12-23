import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicBurpeesModalPage } from './basic-burpees-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BasicBurpeesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicBurpeesModalPageRoutingModule {}
