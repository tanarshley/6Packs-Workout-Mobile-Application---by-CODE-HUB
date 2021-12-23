import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DracThirdCalfRaisePage } from './drac-third-calf-raise.page';

const routes: Routes = [
  {
    path: '',
    component: DracThirdCalfRaisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DracThirdCalfRaisePageRoutingModule {}
