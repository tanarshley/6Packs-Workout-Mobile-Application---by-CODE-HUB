import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DracSecondCalfRaisePage } from './drac-second-calf-raise.page';

const routes: Routes = [
  {
    path: '',
    component: DracSecondCalfRaisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DracSecondCalfRaisePageRoutingModule {}
