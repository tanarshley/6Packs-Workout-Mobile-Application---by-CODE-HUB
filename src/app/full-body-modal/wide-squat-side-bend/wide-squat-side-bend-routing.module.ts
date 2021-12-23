import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WideSquatSideBendPage } from './wide-squat-side-bend.page';

const routes: Routes = [
  {
    path: '',
    component: WideSquatSideBendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WideSquatSideBendPageRoutingModule {}
