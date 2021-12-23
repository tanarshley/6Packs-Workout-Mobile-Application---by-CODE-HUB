import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WideSquatSideBendPageRoutingModule } from './wide-squat-side-bend-routing.module';

import { WideSquatSideBendPage } from './wide-squat-side-bend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WideSquatSideBendPageRoutingModule
  ],
  declarations: [WideSquatSideBendPage]
})
export class WideSquatSideBendPageModule {}
