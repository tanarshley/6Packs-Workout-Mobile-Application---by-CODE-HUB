import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvocadoModalPageRoutingModule } from './avocado-modal-routing.module';

import { AvocadoModalPage } from './avocado-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvocadoModalPageRoutingModule
  ],
  declarations: [AvocadoModalPage]
})
export class AvocadoModalPageModule {}
