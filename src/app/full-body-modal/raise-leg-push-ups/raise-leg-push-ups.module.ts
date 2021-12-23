import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaiseLegPushUpsPageRoutingModule } from './raise-leg-push-ups-routing.module';

import { RaiseLegPushUpsPage } from './raise-leg-push-ups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaiseLegPushUpsPageRoutingModule
  ],
  declarations: [RaiseLegPushUpsPage]
})
export class RaiseLegPushUpsPageModule {}
