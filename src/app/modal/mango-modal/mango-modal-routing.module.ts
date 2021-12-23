import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MangoModalPage } from './mango-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MangoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MangoModalPageRoutingModule {}
