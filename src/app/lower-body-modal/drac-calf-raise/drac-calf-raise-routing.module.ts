import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DracCalfRaisePage } from './drac-calf-raise.page';

const routes: Routes = [
  {
    path: '',
    component: DracCalfRaisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DracCalfRaisePageRoutingModule {}
