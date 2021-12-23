import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JumpingLungesPageRoutingModule } from './jumping-lunges-routing.module';

import { JumpingLungesPage } from './jumping-lunges.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JumpingLungesPageRoutingModule
  ],
  declarations: [JumpingLungesPage]
})
export class JumpingLungesPageModule {}
