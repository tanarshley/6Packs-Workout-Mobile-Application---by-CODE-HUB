import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlueberriesModalPageRoutingModule } from './blueberries-modal-routing.module';

import { BlueberriesModalPage } from './blueberries-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlueberriesModalPageRoutingModule
  ],
  declarations: [BlueberriesModalPage]
})
export class BlueberriesModalPageModule {}
