import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'workout',
        loadChildren: () => import('../workout/workout.module').then(m => m.WorkoutPageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../notification/notification.module').then(m => m.NotificationPageModule)
      },
      {
        path: 'todoworkout',
        loadChildren: () => import('../todoworkout/todoworkout.module').then(m => m.TodoworkoutPageModule)
      },
      {
        path: 'diet',
        loadChildren: () => import('../diet/diet.module').then(m => m.DietPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/workout',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/workout',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
