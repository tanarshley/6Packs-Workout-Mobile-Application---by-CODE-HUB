import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoworkoutPageRoutingModule } from './todoworkout-routing.module';

import { TodoworkoutPage } from './todoworkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoworkoutPageRoutingModule
  ],
  declarations: [TodoworkoutPage]
})
export class TodoworkoutPageModule {}
