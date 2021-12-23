import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FruitsModalPageRoutingModule } from './fruits-modal-routing.module';

import { FruitsModalPage } from './fruits-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FruitsModalPageRoutingModule
  ],
  declarations: [FruitsModalPage]
})
export class FruitsModalPageModule {}
