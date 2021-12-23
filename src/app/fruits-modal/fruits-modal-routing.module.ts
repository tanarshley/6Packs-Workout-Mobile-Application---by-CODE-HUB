import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FruitsModalPage } from './fruits-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FruitsModalPage
  },
  {
    path: 'papaya-modal',
    loadChildren: () => import('./papaya-modal/papaya-modal.module').then( m => m.PapayaModalPageModule)
  },
  {
    path: 'peaches-modal',
    loadChildren: () => import('./peaches-modal/peaches-modal.module').then( m => m.PeachesModalPageModule)
  },
  {
    path: 'strawberries-modal',
    loadChildren: () => import('./strawberries-modal/strawberries-modal.module').then( m => m.StrawberriesModalPageModule)
  },
  {
    path: 'pineapple-modal',
    loadChildren: () => import('./pineapple-modal/pineapple-modal.module').then( m => m.PineappleModalPageModule)
  },
  {
    path: 'blueberries-modal',
    loadChildren: () => import('./blueberries-modal/blueberries-modal.module').then( m => m.BlueberriesModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FruitsModalPageRoutingModule {}
