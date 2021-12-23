import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerlinArmScissorPageRoutingModule } from './merlin-arm-scissor-routing.module';

import { MerlinArmScissorPage } from './merlin-arm-scissor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerlinArmScissorPageRoutingModule
  ],
  declarations: [MerlinArmScissorPage]
})
export class MerlinArmScissorPageModule {}
