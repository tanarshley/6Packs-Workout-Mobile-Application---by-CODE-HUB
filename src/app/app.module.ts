import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalPageModule } from './modal/modal.module';
import { AvocadoModalPageModule } from './modal/avocado-modal/avocado-modal.module';
import { MangoModalPageModule } from './modal/mango-modal/mango-modal.module';
import { PapayaModalPageModule } from './fruits-modal/papaya-modal/papaya-modal.module';
import { PeachesModalPageModule } from './fruits-modal/peaches-modal/peaches-modal.module';
import { StrawberriesModalPageModule } from './fruits-modal/strawberries-modal/strawberries-modal.module';
import { PineappleModalPageModule } from './fruits-modal/pineapple-modal/pineapple-modal.module';
import { BlueberriesModalPageModule } from './fruits-modal/blueberries-modal/blueberries-modal.module';


@NgModule({
  declarations: [AppComponent],
  exports: [FormsModule, ReactiveFormsModule],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule, ModalPageModule,
    AvocadoModalPageModule, MangoModalPageModule, BlueberriesModalPageModule, PapayaModalPageModule, PeachesModalPageModule,
  StrawberriesModalPageModule, PineappleModalPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {}
