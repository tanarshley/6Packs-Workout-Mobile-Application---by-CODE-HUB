import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LowerBodyModalPage } from './lower-body-modal.page';

const routes: Routes = [
  {
    path: '',
    component: LowerBodyModalPage
  },
  {
    path: 'side-leg-raise-modal',
    loadChildren: () => import('./side-leg-raise-modal/side-leg-raise-modal.module').then( m => m.SideLegRaiseModalPageModule)
  },
  {
    path: 'flutter-kicks-modal',
    loadChildren: () => import('./flutter-kicks-modal/flutter-kicks-modal.module').then( m => m.FlutterKicksModalPageModule)
  },
  {
    path: 'bridges-modal',
    loadChildren: () => import('./bridges-modal/bridges-modal.module').then( m => m.BridgesModalPageModule)
  },
  {
    path: 'second-flutter-kicks-modal',
    loadChildren: () => import('./second-flutter-kicks-modal/second-flutter-kicks-modal.module').
    then( m => m.SecondFlutterKicksModalPageModule)
  },
  {
    path: 'knee-roll-modal',
    loadChildren: () => import('./knee-roll-modal/knee-roll-modal.module').then( m => m.KneeRollModalPageModule)
  },
  {
    path: 'third-flutter-kicksl-modal',
    loadChildren: () => import('./third-flutter-kicksl-modal/third-flutter-kicksl-modal.module').
    then( m => m.ThirdFlutterKickslModalPageModule)
  },
  {
    path: 'drac-jump-squat',
    loadChildren: () => import('./drac-jump-squat/drac-jump-squat.module').then( m => m.DracJumpSquatPageModule)
  },
  {
    path: 'drac-calf-raise',
    loadChildren: () => import('./drac-calf-raise/drac-calf-raise.module').then( m => m.DracCalfRaisePageModule)
  },
  {
    path: 'drac-squat-hold-punches',
    loadChildren: () => import('./drac-squat-hold-punches/drac-squat-hold-punches.module').then( m => m.DracSquatHoldPunchesPageModule)
  },
  {
    path: 'drac-second-calf-raise',
    loadChildren: () => import('./drac-second-calf-raise/drac-second-calf-raise.module').then( m => m.DracSecondCalfRaisePageModule)
  },
  {
    path: 'drac-third-calf-raise',
    loadChildren: () => import('./drac-third-calf-raise/drac-third-calf-raise.module').then( m => m.DracThirdCalfRaisePageModule)
  },
  {
    path: 'drac-second-jump-squat',
    loadChildren: () => import('./drac-second-jump-squat/drac-second-jump-squat.module').then( m => m.DracSecondJumpSquatPageModule)
  },
  {
    path: 'bbsquat',
    loadChildren: () => import('./bbsquat/bbsquat.module').then( m => m.BBsquatPageModule)
  },
  {
    path: 'bbplank-back',
    loadChildren: () => import('./bbplank-back/bbplank-back.module').then( m => m.BBplankBackPageModule)
  },
  {
    path: 'bblunge-step-ups',
    loadChildren: () => import('./bblunge-step-ups/bblunge-step-ups.module').then( m => m.BBlungeStepUpsPageModule)
  },
  {
    path: 'bbsingle-leg-bridges',
    loadChildren: () => import('./bbsingle-leg-bridges/bbsingle-leg-bridges.module').then( m => m.BBsingleLegBridgesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LowerBodyModalPageRoutingModule {}
