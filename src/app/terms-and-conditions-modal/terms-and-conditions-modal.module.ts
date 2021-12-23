import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TermsAndConditionsModalPageRoutingModule } from './terms-and-conditions-modal-routing.module';

import { TermsAndConditionsModalPage } from './terms-and-conditions-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsAndConditionsModalPageRoutingModule
  ],
  declarations: [TermsAndConditionsModalPage]
})
export class TermsAndConditionsModalPageModule {}
