import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KaleModalPageRoutingModule } from './kale-modal-routing.module';

import { KaleModalPage } from './kale-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KaleModalPageRoutingModule
  ],
  declarations: [KaleModalPage]
})
export class KaleModalPageModule {}
