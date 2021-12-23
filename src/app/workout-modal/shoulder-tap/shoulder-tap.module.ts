import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoulderTapPageRoutingModule } from './shoulder-tap-routing.module';

import { ShoulderTapPage } from './shoulder-tap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoulderTapPageRoutingModule
  ],
  declarations: [ShoulderTapPage]
})
export class ShoulderTapPageModule {}
