import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElbowPlankHoldsModalPageRoutingModule } from './elbow-plank-holds-modal-routing.module';

import { ElbowPlankHoldsModalPage } from './elbow-plank-holds-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElbowPlankHoldsModalPageRoutingModule
  ],
  declarations: [ElbowPlankHoldsModalPage]
})
export class ElbowPlankHoldsModalPageModule {}
