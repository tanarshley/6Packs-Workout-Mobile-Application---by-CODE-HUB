import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BBsquatPageRoutingModule } from './bbsquat-routing.module';

import { BBsquatPage } from './bbsquat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BBsquatPageRoutingModule
  ],
  declarations: [BBsquatPage]
})
export class BBsquatPageModule {}
