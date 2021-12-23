import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondPushUpPageRoutingModule } from './second-push-up-routing.module';

import { SecondPushUpPage } from './second-push-up.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondPushUpPageRoutingModule
  ],
  declarations: [SecondPushUpPage]
})
export class SecondPushUpPageModule {}
