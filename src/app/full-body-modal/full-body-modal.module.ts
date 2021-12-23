import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullBodyModalPageRoutingModule } from './full-body-modal-routing.module';

import { FullBodyModalPage } from './full-body-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullBodyModalPageRoutingModule
  ],
  declarations: [FullBodyModalPage]
})
export class FullBodyModalPageModule {}
