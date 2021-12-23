import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoulderTapModalPageRoutingModule } from './shoulder-tap-modal-routing.module';

import { ShoulderTapModalPage } from './shoulder-tap-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoulderTapModalPageRoutingModule
  ],
  declarations: [ShoulderTapModalPage]
})
export class ShoulderTapModalPageModule {}
