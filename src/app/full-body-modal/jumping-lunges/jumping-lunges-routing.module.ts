import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JumpingLungesPage } from './jumping-lunges.page';

const routes: Routes = [
  {
    path: '',
    component: JumpingLungesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JumpingLungesPageRoutingModule {}
