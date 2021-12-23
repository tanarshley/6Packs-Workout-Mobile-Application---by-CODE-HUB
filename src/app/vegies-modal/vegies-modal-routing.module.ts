import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VegiesModalPage } from './vegies-modal.page';

const routes: Routes = [
  {
    path: '',
    component: VegiesModalPage
  },
  {
    path: 'soy-beans-modal',
    loadChildren: () => import('./soy-beans-modal/soy-beans-modal.module').then( m => m.SoyBeansModalPageModule)
  },
  {
    path: 'broccoli-modal',
    loadChildren: () => import('./broccoli-modal/broccoli-modal.module').then( m => m.BroccoliModalPageModule)
  },
  {
    path: 'edamame-modal',
    loadChildren: () => import('./edamame-modal/edamame-modal.module').then( m => m.EdamameModalPageModule)
  },
  {
    path: 'spinach-modal',
    loadChildren: () => import('./spinach-modal/spinach-modal.module').then( m => m.SpinachModalPageModule)
  },
  {
    path: 'kale-modal',
    loadChildren: () => import('./kale-modal/kale-modal.module').then( m => m.KaleModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VegiesModalPageRoutingModule {}
