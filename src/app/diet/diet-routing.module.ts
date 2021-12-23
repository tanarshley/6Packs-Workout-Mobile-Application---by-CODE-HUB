import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DietPage } from './diet.page';

const routes: Routes = [
  {
    path: '',
    component: DietPage
  },
  {
    path: 'avocado-modal',
    loadChildren: () => import('../modal/avocado-modal/avocado-modal.module').then( m => m.AvocadoModalPageModule)
  },
  {
    path: 'mango-modal',
    loadChildren: () => import('../modal/mango-modal/mango-modal.module').then( m => m.MangoModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DietPageRoutingModule {}
