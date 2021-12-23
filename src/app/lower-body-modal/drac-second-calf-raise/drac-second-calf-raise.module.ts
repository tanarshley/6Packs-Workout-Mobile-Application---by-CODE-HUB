import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DracSecondCalfRaisePageRoutingModule } from './drac-second-calf-raise-routing.module';

import { DracSecondCalfRaisePage } from './drac-second-calf-raise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DracSecondCalfRaisePageRoutingModule
  ],
  declarations: [DracSecondCalfRaisePage]
})
export class DracSecondCalfRaisePageModule {}
