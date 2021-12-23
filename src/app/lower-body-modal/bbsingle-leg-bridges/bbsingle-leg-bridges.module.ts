import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BBsingleLegBridgesPageRoutingModule } from './bbsingle-leg-bridges-routing.module';

import { BBsingleLegBridgesPage } from './bbsingle-leg-bridges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BBsingleLegBridgesPageRoutingModule
  ],
  declarations: [BBsingleLegBridgesPage]
})
export class BBsingleLegBridgesPageModule {}
