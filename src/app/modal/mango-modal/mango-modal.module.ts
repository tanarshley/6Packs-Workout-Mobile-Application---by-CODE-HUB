import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MangoModalPageRoutingModule } from './mango-modal-routing.module';

import { MangoModalPage } from './mango-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MangoModalPageRoutingModule
  ],
  declarations: [MangoModalPage]
})
export class MangoModalPageModule {}
