import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'slide',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'workout',
    loadChildren: () => import('./workout/workout.module').then( m => m.WorkoutPageModule)
  },
  {
    path: 'diet',
    loadChildren: () => import('./diet/diet.module').then( m => m.DietPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'avocado-modal',
    loadChildren: () => import('./modal/avocado-modal/avocado-modal.module').then( m => m.AvocadoModalPageModule)
  },
  {
    path: 'mango-modal',
    loadChildren: () => import('./modal/mango-modal/mango-modal.module').then( m => m.MangoModalPageModule)
  },
  {
    path: 'fruits-modal',
    loadChildren: () => import('./fruits-modal/fruits-modal.module').then( m => m.FruitsModalPageModule)
  },
  {
    path: 'deactivate-modal',
    loadChildren: () => import('./deactivate-modal/deactivate-modal.module').then( m => m.DeactivateModalPageModule)
  },
  {
    path: 'workout-modal',
    loadChildren: () => import('./workout-modal/workout-modal.module').then( m => m.WorkoutModalPageModule)
  },
  {
    path: 'arm-extenstion-modal',
    loadChildren: () => import('./workout-modal/arm-extenstion-modal/arm-extenstion-modal.module').then
    ( m => m.ArmExtenstionModalPageModule)
  },
  {
    path: 'knee-push-up-modal',
    loadChildren: () => import('./workout-modal/knee-push-up-modal/knee-push-up-modal.module').then
    ( m => m.KneePushUpModalPageModule)
  },
  {
    path: 'bicep-extenstion-modal',
    loadChildren: () => import('./workout-modal/bicep-extenstion-modal/bicep-extenstion-modal.module').then
    ( m => m.BicepExtenstionModalPageModule)
  },
  {
    path: 'second-knee-push-up-modal',
    loadChildren: () => import('./workout-modal/second-knee-push-up-modal/second-knee-push-up-modal.module').then
    ( m => m.SecondKneePushUpModalPageModule)
  },
  {
    path: 'third-knee-push-up-modal',
    loadChildren: () => import('./workout-modal/third-knee-push-up-modal/third-knee-push-up-modal.module').then
    ( m => m.ThirdKneePushUpModalPageModule)
  },
  {
    path: 'arm-scissor-modal',
    loadChildren: () => import('./workout-modal/arm-scissor-modal/arm-scissor-modal.module').then
    ( m => m.ArmScissorModalPageModule)
  },
  {
    path: 'scissor-chop-modal',
    loadChildren: () => import('./workout-modal/scissor-chop-modal/scissor-chop-modal.module').then
    ( m => m.ScissorChopModalPageModule)
  },
  {
    path: 'shoulder-tap-modal',
    loadChildren: () => import('./workout-modal/shoulder-tap-modal/shoulder-tap-modal.module').then
    ( m => m.ShoulderTapModalPageModule)
  },
  {
    path: 'side-shoulder-tap-modal',
    loadChildren: () => import('./workout-modal/side-shoulder-tap-modal/side-shoulder-tap-modal.module').then
    ( m => m.SideShoulderTapModalPageModule)
  },
  {
    path: 'lower-body-modal',
    loadChildren: () => import('./lower-body-modal/lower-body-modal.module').then( m => m.LowerBodyModalPageModule)
  },
  {
    path: 'flutter-kicks-modal',
    loadChildren: () => import('./lower-body-modal/flutter-kicks-modal/flutter-kicks-modal.module').then
    ( m => m.FlutterKicksModalPageModule)
  },
  {
    path: 'bridges-modal',
    loadChildren: () => import('./lower-body-modal/bridges-modal/bridges-modal.module').then
    ( m => m.BridgesModalPageModule)
  },
  {
    path: 'second-flutter-kicks-modal',
    loadChildren: () => import('./lower-body-modal/second-flutter-kicks-modal/second-flutter-kicks-modal.module').then
    ( m => m.SecondFlutterKicksModalPageModule)
  },
  {
    path: 'knee-roll-modal',
    loadChildren: () => import('./lower-body-modal/knee-roll-modal/knee-roll-modal.module').then
    ( m => m.KneeRollModalPageModule)
  },
  {
    path: 'third-flutter-kicksl-modal',
    loadChildren: () => import('./lower-body-modal/third-flutter-kicksl-modal/third-flutter-kicksl-modal.module').then
    ( m => m.ThirdFlutterKickslModalPageModule)
  },
  {
    path: 'full-body-modal',
    loadChildren: () => import('./full-body-modal/full-body-modal.module').then( m => m.FullBodyModalPageModule)
  },
  {
    path: 'squat-modal',
    loadChildren: () => import('./full-body-modal/squat-modal/squat-modal.module').then( m => m.SquatModalPageModule)
  },
  {
    path: 'push-up-modal',
    loadChildren: () => import('./full-body-modal/push-up-modal/push-up-modal.module').then( m => m.PushUpModalPageModule)
  },
  {
    path: 'basic-burpees-modal',
    loadChildren: () => import('./full-body-modal/basic-burpees-modal/basic-burpees-modal.module').then( m => m.BasicBurpeesModalPageModule)
  },
  {
    path: 'reverse-angels-modal',
    loadChildren: () => import('./full-body-modal/reverse-angels-modal/reverse-angels-modal.module').then
    ( m => m.ReverseAngelsModalPageModule)
  },
  {
    path: 'elbow-plank-holds-modal',
    loadChildren: () => import('./full-body-modal/elbow-plank-holds-modal/elbow-plank-holds-modal.module').then
    ( m => m.ElbowPlankHoldsModalPageModule)
  },
  {
    path: 'merlin-chest-expansion',
    loadChildren: () => import('./workout-modal/merlin-chest-expansion/merlin-chest-expansion.module').
    then( m => m.MerlinChestExpansionPageModule)
  },
  {
    path: 'merlin-arm-circles',
    loadChildren: () => import('./workout-modal/merlin-arm-circles/merlin-arm-circles.module').then( m => m.MerlinArmCirclesPageModule)
  },
  {
    path: 'merlin-arm-scissor',
    loadChildren: () => import('./workout-modal/merlin-arm-scissor/merlin-arm-scissor.module').then( m => m.MerlinArmScissorPageModule)
  },
  {
    path: 'merlin-scissor-chops',
    loadChildren: () => import('./workout-modal/merlin-scissor-chops/merlin-scissor-chops.module').
    then( m => m.MerlinScissorChopsPageModule)
  },
  {
    path: 'drac-calf-raise',
    loadChildren: () => import('./lower-body-modal/drac-calf-raise/drac-calf-raise.module').
    then( m => m.DracCalfRaisePageModule)
  },
  {
    path: 'drac-second-calf-raise',
    loadChildren: () => import('./lower-body-modal/drac-second-calf-raise/drac-second-calf-raise.module').
    then( m => m.DracSecondCalfRaisePageModule)
  },
  {
    path: 'drac-third-calf-raise',
    loadChildren: () => import('./lower-body-modal/drac-third-calf-raise/drac-third-calf-raise.module').
    then( m => m.DracThirdCalfRaisePageModule)
  },
  {
    path: 'drac-jump-squat',
    loadChildren: () => import('./lower-body-modal/drac-jump-squat/drac-jump-squat.module').
    then( m => m.DracJumpSquatPageModule)
  },
  {
    path: 'drac-squat-hold-punches',
    loadChildren: () => import('./lower-body-modal/drac-squat-hold-punches/drac-squat-hold-punches.module').
    then( m => m.DracSquatHoldPunchesPageModule)
  },
  {
    path: 'drac-second-jump-squat',
    loadChildren: () => import('./lower-body-modal/drac-second-jump-squat/drac-second-jump-squat.module').
    then( m => m.DracSecondJumpSquatPageModule)
  },
  {
    path: 'wide-squat',
    loadChildren: () => import('./full-body-modal/wide-squat/wide-squat.module').
    then( m => m.WideSquatPageModule)
  },
  {
    path: 'wide-squat-side-bend',
    loadChildren: () => import('./full-body-modal/wide-squat-side-bend/wide-squat-side-bend.module').
    then( m => m.WideSquatSideBendPageModule)
  },
  {
    path: 'wide-squat-calf-raise',
    loadChildren: () => import('./full-body-modal/wide-squat-calf-raise/wide-squat-calf-raise.module').
    then( m => m.WideSquatCalfRaisePageModule)
  },
  {
    path: 'wide-squat-punches',
    loadChildren: () => import('./full-body-modal/wide-squat-punches/wide-squat-punches.module').
    then( m => m.WideSquatPunchesPageModule)
  },
  {
    path: 'push-up',
    loadChildren: () => import('./workout-modal/push-up/push-up.module').
    then( m => m.PushUpPageModule)
  },
  {
    path: 'shoulder-tap',
    loadChildren: () => import('./workout-modal/shoulder-tap/shoulder-tap.module').
    then( m => m.ShoulderTapPageModule)
  },
  {
    path: 'second-push-up',
    loadChildren: () => import('./workout-modal/second-push-up/second-push-up.module').
    then( m => m.SecondPushUpPageModule)
  },
  {
    path: 'plank-hold',
    loadChildren: () => import('./workout-modal/plank-hold/plank-hold.module').
    then( m => m.PlankHoldPageModule)
  },
  {
    path: 'plank-side-crunches',
    loadChildren: () => import('./workout-modal/plank-side-crunches/plank-side-crunches.module').
    then( m => m.PlankSideCrunchesPageModule)
  },
  {
    path: 'second-plank-hold',
    loadChildren: () => import('./workout-modal/second-plank-hold/second-plank-hold.module').
    then( m => m.SecondPlankHoldPageModule)
  },
  {
    path: 'bblunge-step-ups',
    loadChildren: () => import('./lower-body-modal/bblunge-step-ups/bblunge-step-ups.module').
    then( m => m.BBlungeStepUpsPageModule)
  },
  {
    path: 'bbplank-back',
    loadChildren: () => import('./lower-body-modal/bbplank-back/bbplank-back.module').
    then( m => m.BBplankBackPageModule)
  },
  {
    path: 'bbsingle-leg-bridges',
    loadChildren: () => import('./lower-body-modal/bbsingle-leg-bridges/bbsingle-leg-bridges.module').
    then( m => m.BBsingleLegBridgesPageModule)
  },
  {
    path: 'bbsquat',
    loadChildren: () => import('./lower-body-modal/bbsquat/bbsquat.module').
    then( m => m.BBsquatPageModule)
  },
  {
    path: 'jump-squat',
    loadChildren: () => import('./full-body-modal/jump-squat/jump-squat.module').
    then( m => m.JumpSquatPageModule)
  },
  {
    path: 'push-up-shoulder-taps',
    loadChildren: () => import('./full-body-modal/push-up-shoulder-taps/push-up-shoulder-taps.module').
    then( m => m.PushUpShoulderTapsPageModule)
  },
  {
    path: 'side-plank-rotations',
    loadChildren: () => import('./full-body-modal/side-plank-rotations/side-plank-rotations.module').
    then( m => m.SidePlankRotationsPageModule)
  },
  {
    path: 'jumping-lunges',
    loadChildren: () => import('./full-body-modal/jumping-lunges/jumping-lunges.module').
    then( m => m.JumpingLungesPageModule)
  },
  {
    path: 'raise-leg-push-ups',
    loadChildren: () => import('./full-body-modal/raise-leg-push-ups/raise-leg-push-ups.module').
    then( m => m.RaiseLegPushUpsPageModule)
  },
  {
    path: 'side-plank-crunches',
    loadChildren: () => import('./full-body-modal/side-plank-crunches/side-plank-crunches.module').
    then( m => m.SidePlankCrunchesPageModule)
  },
  {
    path: 'vegies-modal',
    loadChildren: () => import('./vegies-modal/vegies-modal.module').then( m => m.VegiesModalPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'slide',
    loadChildren: () => import('./slide/slide.module').then( m => m.SlidePageModule)
  },
  {
    path: 'change-password-modal',
    loadChildren: () => import('./change-password-modal/change-password-modal.module').then( m => m.ChangePasswordModalPageModule)
  },
  {
    path: 'old-pass-entry',
    loadChildren: () => import('./old-pass-entry/old-pass-entry.module').then( m => m.OldPassEntryPageModule)
  },
  {
    path: 'todoworkout',
    loadChildren: () => import('./todoworkout/todoworkout.module').then( m => m.TodoworkoutPageModule)
  },
  {
    path: 'update-todo',
    loadChildren: () => import('./update-todo/update-todo.module').then( m => m.UpdateTodoPageModule)
  },
  {
    path: 'add-workout',
    loadChildren: () => import('./add-workout/add-workout.module').then( m => m.AddWorkoutPageModule)
  },
  {
    path: 'terms-and-conditions-modal',
    loadChildren: () => import('./terms-and-conditions-modal/terms-and-conditions-modal.module').then( m => m.TermsAndConditionsModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
