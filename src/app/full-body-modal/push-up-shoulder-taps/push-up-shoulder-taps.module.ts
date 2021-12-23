import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PushUpShoulderTapsPageRoutingModule } from './push-up-shoulder-taps-routing.module';

import { PushUpShoulderTapsPage } from './push-up-shoulder-taps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PushUpShoulderTapsPageRoutingModule
  ],
  declarations: [PushUpShoulderTapsPage]
})
export class PushUpShoulderTapsPageModule {}
