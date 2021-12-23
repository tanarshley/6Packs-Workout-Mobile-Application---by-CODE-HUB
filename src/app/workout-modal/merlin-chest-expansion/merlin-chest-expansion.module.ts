import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerlinChestExpansionPageRoutingModule } from './merlin-chest-expansion-routing.module';

import { MerlinChestExpansionPage } from './merlin-chest-expansion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerlinChestExpansionPageRoutingModule
  ],
  declarations: [MerlinChestExpansionPage]
})
export class MerlinChestExpansionPageModule {}
