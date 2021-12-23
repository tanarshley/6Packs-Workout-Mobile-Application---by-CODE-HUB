import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmScissorModalPageRoutingModule } from './arm-scissor-modal-routing.module';

import { ArmScissorModalPage } from './arm-scissor-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmScissorModalPageRoutingModule
  ],
  declarations: [ArmScissorModalPage]
})
export class ArmScissorModalPageModule {}
