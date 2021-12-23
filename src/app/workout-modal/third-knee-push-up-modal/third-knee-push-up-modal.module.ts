import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdKneePushUpModalPageRoutingModule } from './third-knee-push-up-modal-routing.module';

import { ThirdKneePushUpModalPage } from './third-knee-push-up-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThirdKneePushUpModalPageRoutingModule
  ],
  declarations: [ThirdKneePushUpModalPage]
})
export class ThirdKneePushUpModalPageModule {}
