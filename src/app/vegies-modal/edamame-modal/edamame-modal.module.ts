import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdamameModalPageRoutingModule } from './edamame-modal-routing.module';

import { EdamameModalPage } from './edamame-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdamameModalPageRoutingModule
  ],
  declarations: [EdamameModalPage]
})
export class EdamameModalPageModule {}
