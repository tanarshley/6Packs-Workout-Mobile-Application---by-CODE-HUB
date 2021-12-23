import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LowerBodyModalPageRoutingModule } from './lower-body-modal-routing.module';

import { LowerBodyModalPage } from './lower-body-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LowerBodyModalPageRoutingModule
  ],
  declarations: [LowerBodyModalPage]
})
export class LowerBodyModalPageModule {}
