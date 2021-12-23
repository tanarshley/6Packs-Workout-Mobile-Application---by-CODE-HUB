import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BBplankBackPageRoutingModule } from './bbplank-back-routing.module';

import { BBplankBackPage } from './bbplank-back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BBplankBackPageRoutingModule
  ],
  declarations: [BBplankBackPage]
})
export class BBplankBackPageModule {}
