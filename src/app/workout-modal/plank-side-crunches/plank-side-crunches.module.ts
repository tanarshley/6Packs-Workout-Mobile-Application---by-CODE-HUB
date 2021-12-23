import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlankSideCrunchesPageRoutingModule } from './plank-side-crunches-routing.module';

import { PlankSideCrunchesPage } from './plank-side-crunches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlankSideCrunchesPageRoutingModule
  ],
  declarations: [PlankSideCrunchesPage]
})
export class PlankSideCrunchesPageModule {}
