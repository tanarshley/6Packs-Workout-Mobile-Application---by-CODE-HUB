import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KneeRollModalPageRoutingModule } from './knee-roll-modal-routing.module';

import { KneeRollModalPage } from './knee-roll-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KneeRollModalPageRoutingModule
  ],
  declarations: [KneeRollModalPage]
})
export class KneeRollModalPageModule {}
