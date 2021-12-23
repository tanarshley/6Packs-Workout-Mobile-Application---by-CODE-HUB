import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { KneePushUpModalPage } from '../workout-modal/knee-push-up-modal/knee-push-up-modal.page';
import { SideLegRaiseModalPage } from '../lower-body-modal/side-leg-raise-modal/side-leg-raise-modal.page';
import { SquatModalPage } from '../full-body-modal/squat-modal/squat-modal.page';
import { MerlinChestExpansionPage } from '../workout-modal/merlin-chest-expansion/merlin-chest-expansion.page';
import { DracJumpSquatPage } from '../lower-body-modal/drac-jump-squat/drac-jump-squat.page';
import { WideSquatPage } from '../full-body-modal/wide-squat/wide-squat.page';
import { PushUpPage } from '../workout-modal/push-up/push-up.page';
import { BBsquatPage } from '../lower-body-modal/bbsquat/bbsquat.page';
import { JumpSquatPage } from '../full-body-modal/jump-squat/jump-squat.page';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage implements OnInit {
  selectTabs = 'upper';


  constructor(public mdController: ModalController) {
  }

 async openPieceOfCakeModal() {
   const modal = await this.mdController.create({
     component: SideLegRaiseModalPage,
   });
  return await modal.present();
 }


 async openDracarys() {
  const modal = await this.mdController.create({
    component: DracJumpSquatPage,
  });
  return await modal.present();
}


 async openKneePushModal() {
  const modal = await this.mdController.create({
    component: KneePushUpModalPage,
  });
  return await modal.present();
}

async openMerlinModal() {
  const modal = await this.mdController.create({
    component: MerlinChestExpansionPage,
  });
  return await modal.present();
}


async  openSquatModal() {
  const modal = await this.mdController.create({
    component: SquatModalPage,
  });
  return await modal.present();
}

async openFullBodyWorks() {
  const modal = await this.mdController.create({
    component: WideSquatPage,
  });
 return await modal.present();
}

async openRedReaper() {
  const modal = await this.mdController.create({
    component: PushUpPage,
  });
  return await modal.present();
}

async openBubbleButt() {
  const modal = await this.mdController.create({
    component: BBsquatPage,
  });
 return await modal.present();
}

async openMasterUniv() {
  const modal = await this.mdController.create({
    component: JumpSquatPage,
  });
 return await modal.present();
}



  ngOnInit() {
  }

}
