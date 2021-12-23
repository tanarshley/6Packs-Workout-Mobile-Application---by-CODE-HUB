import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OldPassEntryPage } from './old-pass-entry.page';

const routes: Routes = [
  {
    path: '',
    component: OldPassEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OldPassEntryPageRoutingModule {}
