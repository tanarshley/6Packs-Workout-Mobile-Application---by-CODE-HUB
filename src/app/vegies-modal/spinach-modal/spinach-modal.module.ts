import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpinachModalPageRoutingModule } from './spinach-modal-routing.module';

import { SpinachModalPage } from './spinach-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpinachModalPageRoutingModule
  ],
  declarations: [SpinachModalPage]
})
export class SpinachModalPageModule {}
