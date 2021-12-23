import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PushUpPageRoutingModule } from './push-up-routing.module';

import { PushUpPage } from './push-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PushUpPageRoutingModule
  ],
  declarations: [PushUpPage]
})
export class PushUpPageModule {}
