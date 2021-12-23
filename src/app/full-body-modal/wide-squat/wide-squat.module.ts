import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WideSquatPageRoutingModule } from './wide-squat-routing.module';

import { WideSquatPage } from './wide-squat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WideSquatPageRoutingModule
  ],
  declarations: [WideSquatPage]
})
export class WideSquatPageModule {}
