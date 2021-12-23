import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlutterKicksModalPage } from './flutter-kicks-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FlutterKicksModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlutterKicksModalPageRoutingModule {}
