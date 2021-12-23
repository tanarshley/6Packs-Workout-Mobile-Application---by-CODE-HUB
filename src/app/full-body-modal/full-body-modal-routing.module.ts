import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullBodyModalPage } from './full-body-modal.page';

const routes: Routes = [
  {
    path: '',
    component: FullBodyModalPage
  },
  {
    path: 'squat-modal',
    loadChildren: () => import('./squat-modal/squat-modal.module').then( m => m.SquatModalPageModule)
  },
  {
    path: 'push-up-modal',
    loadChildren: () => import('./push-up-modal/push-up-modal.module').then( m => m.PushUpModalPageModule)
  },
  {
    path: 'basic-burpees-modal',
    loadChildren: () => import('./basic-burpees-modal/basic-burpees-modal.module').then( m => m.BasicBurpeesModalPageModule)
  },
  {
    path: 'reverse-angels-modal',
    loadChildren: () => import('./reverse-angels-modal/reverse-angels-modal.module').then( m => m.ReverseAngelsModalPageModule)
  },
  {
    path: 'elbow-plank-holds-modal',
    loadChildren: () => import('./elbow-plank-holds-modal/elbow-plank-holds-modal.module').then( m => m.ElbowPlankHoldsModalPageModule)
  },
  {
    path: 'wide-squat',
    loadChildren: () => import('./wide-squat/wide-squat.module').then( m => m.WideSquatPageModule)
  },
  {
    path: 'wide-squat-side-bend',
    loadChildren: () => import('./wide-squat-side-bend/wide-squat-side-bend.module').then( m => m.WideSquatSideBendPageModule)
  },
  {
    path: 'wide-squat-calf-raise',
    loadChildren: () => import('./wide-squat-calf-raise/wide-squat-calf-raise.module').then( m => m.WideSquatCalfRaisePageModule)
  },
  {
    path: 'wide-squat-punches',
    loadChildren: () => import('./wide-squat-punches/wide-squat-punches.module').then( m => m.WideSquatPunchesPageModule)
  },
  {
    path: 'jump-squat',
    loadChildren: () => import('./jump-squat/jump-squat.module').then( m => m.JumpSquatPageModule)
  },
  {
    path: 'push-up-shoulder-taps',
    loadChildren: () => import('./push-up-shoulder-taps/push-up-shoulder-taps.module').then( m => m.PushUpShoulderTapsPageModule)
  },
  {
    path: 'side-plank-rotations',
    loadChildren: () => import('./side-plank-rotations/side-plank-rotations.module').then( m => m.SidePlankRotationsPageModule)
  },
  {
    path: 'jumping-lunges',
    loadChildren: () => import('./jumping-lunges/jumping-lunges.module').then( m => m.JumpingLungesPageModule)
  },
  {
    path: 'raise-leg-push-ups',
    loadChildren: () => import('./raise-leg-push-ups/raise-leg-push-ups.module').then( m => m.RaiseLegPushUpsPageModule)
  },
  {
    path: 'side-plank-crunches',
    loadChildren: () => import('./side-plank-crunches/side-plank-crunches.module').then( m => m.SidePlankCrunchesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullBodyModalPageRoutingModule {}
