import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VegiesModalPageRoutingModule } from './vegies-modal-routing.module';

import { VegiesModalPage } from './vegies-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VegiesModalPageRoutingModule
  ],
  declarations: [VegiesModalPage]
})
export class VegiesModalPageModule {}
