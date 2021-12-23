import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BridgesModalPageRoutingModule } from './bridges-modal-routing.module';

import { BridgesModalPage } from './bridges-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BridgesModalPageRoutingModule
  ],
  declarations: [BridgesModalPage]
})
export class BridgesModalPageModule {}
