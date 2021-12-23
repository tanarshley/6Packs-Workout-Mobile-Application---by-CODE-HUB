import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeachesModalPageRoutingModule } from './peaches-modal-routing.module';

import { PeachesModalPage } from './peaches-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeachesModalPageRoutingModule
  ],
  declarations: [PeachesModalPage]
})
export class PeachesModalPageModule {}
