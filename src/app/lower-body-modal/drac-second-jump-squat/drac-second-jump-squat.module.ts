import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DracSecondJumpSquatPageRoutingModule } from './drac-second-jump-squat-routing.module';

import { DracSecondJumpSquatPage } from './drac-second-jump-squat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DracSecondJumpSquatPageRoutingModule
  ],
  declarations: [DracSecondJumpSquatPage]
})
export class DracSecondJumpSquatPageModule {}
