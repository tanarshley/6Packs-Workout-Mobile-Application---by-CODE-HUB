import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SideLegRaiseModalPageRoutingModule } from './side-leg-raise-modal-routing.module';

import { SideLegRaiseModalPage } from './side-leg-raise-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SideLegRaiseModalPageRoutingModule
  ],
  declarations: [SideLegRaiseModalPage]
})
export class SideLegRaiseModalPageModule {}
