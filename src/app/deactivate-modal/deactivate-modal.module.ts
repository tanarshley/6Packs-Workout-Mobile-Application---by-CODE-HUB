import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeactivateModalPageRoutingModule } from './deactivate-modal-routing.module';

import { DeactivateModalPage } from './deactivate-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeactivateModalPageRoutingModule
  ],
  declarations: [DeactivateModalPage]
})
export class DeactivateModalPageModule {}
