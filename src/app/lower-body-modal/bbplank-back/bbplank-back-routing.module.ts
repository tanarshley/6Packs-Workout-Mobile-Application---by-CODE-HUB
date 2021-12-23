import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BBplankBackPage } from './bbplank-back.page';

const routes: Routes = [
  {
    path: '',
    component: BBplankBackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BBplankBackPageRoutingModule {}
