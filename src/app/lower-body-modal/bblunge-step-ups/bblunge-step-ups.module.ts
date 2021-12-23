import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BBlungeStepUpsPageRoutingModule } from './bblunge-step-ups-routing.module';

import { BBlungeStepUpsPage } from './bblunge-step-ups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BBlungeStepUpsPageRoutingModule
  ],
  declarations: [BBlungeStepUpsPage]
})
export class BBlungeStepUpsPageModule {}
