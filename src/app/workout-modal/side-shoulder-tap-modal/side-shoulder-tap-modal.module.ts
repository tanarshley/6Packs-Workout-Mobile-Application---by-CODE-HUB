import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SideShoulderTapModalPageRoutingModule } from './side-shoulder-tap-modal-routing.module';

import { SideShoulderTapModalPage } from './side-shoulder-tap-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SideShoulderTapModalPageRoutingModule
  ],
  declarations: [SideShoulderTapModalPage]
})
export class SideShoulderTapModalPageModule {}
