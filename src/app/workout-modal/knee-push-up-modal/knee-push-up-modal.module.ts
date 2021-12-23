import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KneePushUpModalPageRoutingModule } from './knee-push-up-modal-routing.module';

import { KneePushUpModalPage } from './knee-push-up-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KneePushUpModalPageRoutingModule
  ],
  declarations: [KneePushUpModalPage]
})
export class KneePushUpModalPageModule {}
