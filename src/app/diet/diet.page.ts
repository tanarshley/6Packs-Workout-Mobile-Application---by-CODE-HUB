import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { AvocadoModalPage } from '../modal/avocado-modal/avocado-modal.page';
import { MangoModalPage } from '../modal/mango-modal/mango-modal.page';
import { PapayaModalPage } from '../fruits-modal/papaya-modal/papaya-modal.page';
import { PeachesModalPage } from '../fruits-modal/peaches-modal/peaches-modal.page';
import { PineappleModalPage } from '../fruits-modal/pineapple-modal/pineapple-modal.page';
import { StrawberriesModalPage } from '../fruits-modal/strawberries-modal/strawberries-modal.page';
import { BlueberriesModalPage } from '../fruits-modal/blueberries-modal/blueberries-modal.page';
import { SoyBeansModalPage } from '../vegies-modal/soy-beans-modal/soy-beans-modal.page';
import { BroccoliModalPage } from '../vegies-modal/broccoli-modal/broccoli-modal.page';
import { KaleModalPage } from '../vegies-modal/kale-modal/kale-modal.page';
import { SpinachModalPage } from '../vegies-modal/spinach-modal/spinach-modal.page';
import { EdamameModalPage } from '../vegies-modal/edamame-modal/edamame-modal.page';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.page.html',
  styleUrls: ['./diet.page.scss'],
})
export class DietPage implements OnInit {

  cardTitle = 'banana';

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: false,
    spaceBetween: 20,
  };

  constructor(public mdController: ModalController) {
   }

  async bananaModal() {
    const modal = await this.mdController.create({
      component: ModalPage,
    });
    return await modal.present();
  }

  async avocadoModal() {
    const modal = await this.mdController.create({
      component: AvocadoModalPage,
    });
    return await modal.present();
  }

  async mangoModal() {
    const modal = await this.mdController.create({
      component: MangoModalPage,
    });
    return await modal.present();
  }

  async papayaModal() {
    const modal = await this.mdController.create({
      component: PapayaModalPage,
    });
    return await modal.present();
  }

  async peachesModal() {
    const modal = await this.mdController.create({
      component: PeachesModalPage,
    });
    return await modal.present();
  }

  async strawberriesModal() {
    const modal = await this.mdController.create({
      component: StrawberriesModalPage,
    });
    return await modal.present();
  }

  async pineappleModal() {
    const modal = await this.mdController.create({
      component: PineappleModalPage,
    });
    return await modal.present();
  }

  async blueberriesModal() {
    const modal = await this.mdController.create({
      component: BlueberriesModalPage,
    });
    return await modal.present();
  }




  async soybeansModal() {
    const modal = await this.mdController.create({
      component: SoyBeansModalPage,
    });
    return await modal.present();
  }

  async endamameModal() {
    const modal = await this.mdController.create({
      component: EdamameModalPage,
    });
    return await modal.present();
  }

  async broccoliModal() {
    const modal = await this.mdController.create({
      component: BroccoliModalPage,
    });
    return await modal.present();
  }

  async spinachModal() {
    const modal = await this.mdController.create({
      component: SpinachModalPage,
    });
    return await modal.present();
  }

  async kaleModal() {
    const modal = await this.mdController.create({
      component: KaleModalPage,
    });
    return await modal.present();
  }

  ngOnInit() {
    console.log(this.cardTitle);
  }

}
