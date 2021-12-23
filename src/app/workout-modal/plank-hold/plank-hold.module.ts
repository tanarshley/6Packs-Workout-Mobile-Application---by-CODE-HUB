import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlankHoldPageRoutingModule } from './plank-hold-routing.module';

import { PlankHoldPage } from './plank-hold.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlankHoldPageRoutingModule
  ],
  declarations: [PlankHoldPage]
})
export class PlankHoldPageModule {}
