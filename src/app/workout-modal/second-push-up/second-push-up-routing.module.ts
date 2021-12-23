import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondPushUpPage } from './second-push-up.page';

const routes: Routes = [
  {
    path: '',
    component: SecondPushUpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondPushUpPageRoutingModule {}
