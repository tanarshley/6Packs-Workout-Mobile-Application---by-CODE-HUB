import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdFlutterKickslModalPageRoutingModule } from './third-flutter-kicksl-modal-routing.module';

import { ThirdFlutterKickslModalPage } from './third-flutter-kicksl-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThirdFlutterKickslModalPageRoutingModule
  ],
  declarations: [ThirdFlutterKickslModalPage]
})
export class ThirdFlutterKickslModalPageModule {}
