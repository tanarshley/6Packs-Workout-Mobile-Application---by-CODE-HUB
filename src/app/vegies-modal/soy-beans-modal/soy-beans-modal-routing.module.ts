import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoyBeansModalPage } from './soy-beans-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SoyBeansModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoyBeansModalPageRoutingModule {}
