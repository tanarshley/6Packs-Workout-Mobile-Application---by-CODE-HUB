import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPage } from './modal.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPage
  },
  {
    path: 'avocado-modal',
    loadChildren: () => import('./avocado-modal/avocado-modal.module').then( m => m.AvocadoModalPageModule)
  },
  {
    path: 'mango-modal',
    loadChildren: () => import('./mango-modal/mango-modal.module').then( m => m.MangoModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPageRoutingModule {}
