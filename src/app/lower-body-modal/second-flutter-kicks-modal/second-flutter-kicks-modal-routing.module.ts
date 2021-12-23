import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondFlutterKicksModalPage } from './second-flutter-kicks-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SecondFlutterKicksModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondFlutterKicksModalPageRoutingModule {}
