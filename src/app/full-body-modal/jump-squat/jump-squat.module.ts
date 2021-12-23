import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JumpSquatPageRoutingModule } from './jump-squat-routing.module';

import { JumpSquatPage } from './jump-squat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JumpSquatPageRoutingModule
  ],
  declarations: [JumpSquatPage]
})
export class JumpSquatPageModule {}
