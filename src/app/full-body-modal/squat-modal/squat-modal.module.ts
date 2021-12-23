import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SquatModalPageRoutingModule } from './squat-modal-routing.module';

import { SquatModalPage } from './squat-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SquatModalPageRoutingModule
  ],
  declarations: [SquatModalPage]
})
export class SquatModalPageModule {}
