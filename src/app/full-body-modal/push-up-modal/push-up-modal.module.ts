import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PushUpModalPageRoutingModule } from './push-up-modal-routing.module';

import { PushUpModalPage } from './push-up-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PushUpModalPageRoutingModule
  ],
  declarations: [PushUpModalPage]
})
export class PushUpModalPageModule {}
