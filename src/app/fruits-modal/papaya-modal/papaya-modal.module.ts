import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PapayaModalPageRoutingModule } from './papaya-modal-routing.module';

import { PapayaModalPage } from './papaya-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PapayaModalPageRoutingModule
  ],
  declarations: [PapayaModalPage]
})
export class PapayaModalPageModule {}
