import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DracJumpSquatPageRoutingModule } from './drac-jump-squat-routing.module';

import { DracJumpSquatPage } from './drac-jump-squat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DracJumpSquatPageRoutingModule
  ],
  declarations: [DracJumpSquatPage]
})
export class DracJumpSquatPageModule {}
