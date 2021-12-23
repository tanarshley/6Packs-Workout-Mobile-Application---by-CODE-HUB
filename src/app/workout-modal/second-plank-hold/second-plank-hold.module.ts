import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondPlankHoldPageRoutingModule } from './second-plank-hold-routing.module';

import { SecondPlankHoldPage } from './second-plank-hold.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondPlankHoldPageRoutingModule
  ],
  declarations: [SecondPlankHoldPage]
})
export class SecondPlankHoldPageModule {}
