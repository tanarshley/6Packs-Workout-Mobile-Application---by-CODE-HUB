import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WideSquatCalfRaisePage } from './wide-squat-calf-raise.page';

const routes: Routes = [
  {
    path: '',
    component: WideSquatCalfRaisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WideSquatCalfRaisePageRoutingModule {}
