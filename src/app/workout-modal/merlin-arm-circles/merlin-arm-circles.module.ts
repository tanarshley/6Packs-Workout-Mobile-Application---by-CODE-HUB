import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerlinArmCirclesPageRoutingModule } from './merlin-arm-circles-routing.module';

import { MerlinArmCirclesPage } from './merlin-arm-circles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerlinArmCirclesPageRoutingModule
  ],
  declarations: [MerlinArmCirclesPage]
})
export class MerlinArmCirclesPageModule {}
