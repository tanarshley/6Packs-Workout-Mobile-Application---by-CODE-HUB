import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SidePlankRotationsPageRoutingModule } from './side-plank-rotations-routing.module';

import { SidePlankRotationsPage } from './side-plank-rotations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SidePlankRotationsPageRoutingModule
  ],
  declarations: [SidePlankRotationsPage]
})
export class SidePlankRotationsPageModule {}
