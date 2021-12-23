import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScissorChopModalPageRoutingModule } from './scissor-chop-modal-routing.module';

import { ScissorChopModalPage } from './scissor-chop-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScissorChopModalPageRoutingModule
  ],
  declarations: [ScissorChopModalPage]
})
export class ScissorChopModalPageModule {}
