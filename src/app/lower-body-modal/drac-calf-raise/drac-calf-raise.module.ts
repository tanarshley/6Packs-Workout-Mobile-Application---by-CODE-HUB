import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DracCalfRaisePageRoutingModule } from './drac-calf-raise-routing.module';

import { DracCalfRaisePage } from './drac-calf-raise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DracCalfRaisePageRoutingModule
  ],
  declarations: [DracCalfRaisePage]
})
export class DracCalfRaisePageModule {}
