import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DracSquatHoldPunchesPageRoutingModule } from './drac-squat-hold-punches-routing.module';

import { DracSquatHoldPunchesPage } from './drac-squat-hold-punches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DracSquatHoldPunchesPageRoutingModule
  ],
  declarations: [DracSquatHoldPunchesPage]
})
export class DracSquatHoldPunchesPageModule {}
