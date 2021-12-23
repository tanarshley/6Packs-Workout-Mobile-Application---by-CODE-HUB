import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlutterKicksModalPageRoutingModule } from './flutter-kicks-modal-routing.module';

import { FlutterKicksModalPage } from './flutter-kicks-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlutterKicksModalPageRoutingModule
  ],
  declarations: [FlutterKicksModalPage]
})
export class FlutterKicksModalPageModule {}
