import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WideSquatCalfRaisePageRoutingModule } from './wide-squat-calf-raise-routing.module';

import { WideSquatCalfRaisePage } from './wide-squat-calf-raise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WideSquatCalfRaisePageRoutingModule
  ],
  declarations: [WideSquatCalfRaisePage]
})
export class WideSquatCalfRaisePageModule {}
