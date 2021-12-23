import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidePlankRotationsPage } from './side-plank-rotations.page';

const routes: Routes = [
  {
    path: '',
    component: SidePlankRotationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidePlankRotationsPageRoutingModule {}
