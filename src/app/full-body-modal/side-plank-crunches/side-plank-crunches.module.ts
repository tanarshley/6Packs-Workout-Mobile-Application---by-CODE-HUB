import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SidePlankCrunchesPageRoutingModule } from './side-plank-crunches-routing.module';

import { SidePlankCrunchesPage } from './side-plank-crunches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SidePlankCrunchesPageRoutingModule
  ],
  declarations: [SidePlankCrunchesPage]
})
export class SidePlankCrunchesPageModule {}
