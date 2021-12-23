import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoworkoutPage } from './todoworkout.page';

const routes: Routes = [
  {
    path: '',
    component: TodoworkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoworkoutPageRoutingModule {}
