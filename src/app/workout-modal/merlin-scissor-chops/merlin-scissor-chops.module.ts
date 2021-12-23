import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerlinScissorChopsPageRoutingModule } from './merlin-scissor-chops-routing.module';

import { MerlinScissorChopsPage } from './merlin-scissor-chops.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerlinScissorChopsPageRoutingModule
  ],
  declarations: [MerlinScissorChopsPage]
})
export class MerlinScissorChopsPageModule {}
