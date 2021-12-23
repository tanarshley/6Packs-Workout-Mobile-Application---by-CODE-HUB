import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlankSideCrunchesPage } from './plank-side-crunches.page';

const routes: Routes = [
  {
    path: '',
    component: PlankSideCrunchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlankSideCrunchesPageRoutingModule {}
