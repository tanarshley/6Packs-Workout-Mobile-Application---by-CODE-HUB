import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PineappleModalPageRoutingModule } from './pineapple-modal-routing.module';

import { PineappleModalPage } from './pineapple-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PineappleModalPageRoutingModule
  ],
  declarations: [PineappleModalPage]
})
export class PineappleModalPageModule {}
