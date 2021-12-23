import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BicepExtenstionModalPageRoutingModule } from './bicep-extenstion-modal-routing.module';

import { BicepExtenstionModalPage } from './bicep-extenstion-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BicepExtenstionModalPageRoutingModule
  ],
  declarations: [BicepExtenstionModalPage]
})
export class BicepExtenstionModalPageModule {}
