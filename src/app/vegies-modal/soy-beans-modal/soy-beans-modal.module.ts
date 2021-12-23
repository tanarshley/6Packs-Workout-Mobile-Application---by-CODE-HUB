import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoyBeansModalPageRoutingModule } from './soy-beans-modal-routing.module';

import { SoyBeansModalPage } from './soy-beans-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoyBeansModalPageRoutingModule
  ],
  declarations: [SoyBeansModalPage]
})
export class SoyBeansModalPageModule {}
