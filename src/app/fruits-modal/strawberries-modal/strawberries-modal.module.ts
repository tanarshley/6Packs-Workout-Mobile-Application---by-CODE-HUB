import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrawberriesModalPageRoutingModule } from './strawberries-modal-routing.module';

import { StrawberriesModalPage } from './strawberries-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrawberriesModalPageRoutingModule
  ],
  declarations: [StrawberriesModalPage]
})
export class StrawberriesModalPageModule {}
