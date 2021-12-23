import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerlinChestExpansionPage } from './merlin-chest-expansion.page';

const routes: Routes = [
  {
    path: '',
    component: MerlinChestExpansionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerlinChestExpansionPageRoutingModule {}
