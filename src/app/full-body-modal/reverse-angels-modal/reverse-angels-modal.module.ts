import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReverseAngelsModalPageRoutingModule } from './reverse-angels-modal-routing.module';

import { ReverseAngelsModalPage } from './reverse-angels-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReverseAngelsModalPageRoutingModule
  ],
  declarations: [ReverseAngelsModalPage]
})
export class ReverseAngelsModalPageModule {}
