import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaiseLegPushUpsPage } from './raise-leg-push-ups.page';

const routes: Routes = [
  {
    path: '',
    component: RaiseLegPushUpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaiseLegPushUpsPageRoutingModule {}
