import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DracThirdCalfRaisePageRoutingModule } from './drac-third-calf-raise-routing.module';

import { DracThirdCalfRaisePage } from './drac-third-calf-raise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DracThirdCalfRaisePageRoutingModule
  ],
  declarations: [DracThirdCalfRaisePage]
})
export class DracThirdCalfRaisePageModule {}
