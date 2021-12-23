import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutModalPage } from './workout-modal.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutModalPage
  },
  {
    path: 'knee-push-up-modal',
    loadChildren: () => import('./knee-push-up-modal/knee-push-up-modal.module').then( m => m.KneePushUpModalPageModule)
  },
  {
    path: 'arm-extenstion-modal',
    loadChildren: () => import('./arm-extenstion-modal/arm-extenstion-modal.module').then( m => m.ArmExtenstionModalPageModule)
  },
  {
    path: 'bicep-extenstion-modal',
    loadChildren: () => import('./bicep-extenstion-modal/bicep-extenstion-modal.module').then( m => m.BicepExtenstionModalPageModule)
  },
  {
    path: 'shoulder-tap-modal',
    loadChildren: () => import('./shoulder-tap-modal/shoulder-tap-modal.module').then( m => m.ShoulderTapModalPageModule)
  },
  {
    path: 'side-shoulder-tap-modal',
    loadChildren: () => import('./side-shoulder-tap-modal/side-shoulder-tap-modal.module').then( m => m.SideShoulderTapModalPageModule)
  },
  {
    path: 'scissor-chop-modal',
    loadChildren: () => import('./scissor-chop-modal/scissor-chop-modal.module').then( m => m.ScissorChopModalPageModule)
  },
  {
    path: 'arm-scissor-modal',
    loadChildren: () => import('./arm-scissor-modal/arm-scissor-modal.module').then( m => m.ArmScissorModalPageModule)
  },
  {
    path: 'second-knee-push-up-modal',
    loadChildren: () => import('./second-knee-push-up-modal/second-knee-push-up-modal.module').then( m => m.SecondKneePushUpModalPageModule)
  },
  {
    path: 'third-knee-push-up-modal',
    loadChildren: () => import('./third-knee-push-up-modal/third-knee-push-up-modal.module').then( m => m.ThirdKneePushUpModalPageModule)
  },
  {
    path: 'merlin-chest-expansion',
    loadChildren: () => import('./merlin-chest-expansion/merlin-chest-expansion.module').then( m => m.MerlinChestExpansionPageModule)
  },
  {
    path: 'merlin-arm-circles',
    loadChildren: () => import('./merlin-arm-circles/merlin-arm-circles.module').then( m => m.MerlinArmCirclesPageModule)
  },
  {
    path: 'merlin-arm-scissor',
    loadChildren: () => import('./merlin-arm-scissor/merlin-arm-scissor.module').then( m => m.MerlinArmScissorPageModule)
  },
  {
    path: 'merlin-scissor-chops',
    loadChildren: () => import('./merlin-scissor-chops/merlin-scissor-chops.module').then( m => m.MerlinScissorChopsPageModule)
  },
  {
    path: 'push-up',
    loadChildren: () => import('./push-up/push-up.module').then( m => m.PushUpPageModule)
  },
  {
    path: 'shoulder-tap',
    loadChildren: () => import('./shoulder-tap/shoulder-tap.module').then( m => m.ShoulderTapPageModule)
  },
  {
    path: 'second-push-up',
    loadChildren: () => import('./second-push-up/second-push-up.module').then( m => m.SecondPushUpPageModule)
  },
  {
    path: 'plank-hold',
    loadChildren: () => import('./plank-hold/plank-hold.module').then( m => m.PlankHoldPageModule)
  },
  {
    path: 'plank-side-crunches',
    loadChildren: () => import('./plank-side-crunches/plank-side-crunches.module').then( m => m.PlankSideCrunchesPageModule)
  },
  {
    path: 'second-plank-hold',
    loadChildren: () => import('./second-plank-hold/second-plank-hold.module').then( m => m.SecondPlankHoldPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutModalPageRoutingModule {}
