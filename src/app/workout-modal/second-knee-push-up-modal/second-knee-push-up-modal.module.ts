import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondKneePushUpModalPageRoutingModule } from './second-knee-push-up-modal-routing.module';

import { SecondKneePushUpModalPage } from './second-knee-push-up-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondKneePushUpModalPageRoutingModule
  ],
  declarations: [SecondKneePushUpModalPage]
})
export class SecondKneePushUpModalPageModule {}
