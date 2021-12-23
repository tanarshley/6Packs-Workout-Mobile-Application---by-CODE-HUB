import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PushUpPage } from './push-up.page';

const routes: Routes = [
  {
    path: '',
    component: PushUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PushUpPageRoutingModule {}
