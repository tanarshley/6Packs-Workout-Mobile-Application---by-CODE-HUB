import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicBurpeesModalPageRoutingModule } from './basic-burpees-modal-routing.module';

import { BasicBurpeesModalPage } from './basic-burpees-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicBurpeesModalPageRoutingModule
  ],
  declarations: [BasicBurpeesModalPage]
})
export class BasicBurpeesModalPageModule {}
