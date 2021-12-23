import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidePlankCrunchesPage } from './side-plank-crunches.page';

const routes: Routes = [
  {
    path: '',
    component: SidePlankCrunchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidePlankCrunchesPageRoutingModule {}
