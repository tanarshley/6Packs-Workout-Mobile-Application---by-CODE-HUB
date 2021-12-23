import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondFlutterKicksModalPageRoutingModule } from './second-flutter-kicks-modal-routing.module';

import { SecondFlutterKicksModalPage } from './second-flutter-kicks-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondFlutterKicksModalPageRoutingModule
  ],
  declarations: [SecondFlutterKicksModalPage]
})
export class SecondFlutterKicksModalPageModule {}
