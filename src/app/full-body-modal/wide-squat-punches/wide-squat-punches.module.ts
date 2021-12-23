import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WideSquatPunchesPageRoutingModule } from './wide-squat-punches-routing.module';

import { WideSquatPunchesPage } from './wide-squat-punches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WideSquatPunchesPageRoutingModule
  ],
  declarations: [WideSquatPunchesPage]
})
export class WideSquatPunchesPageModule {}
