import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-terms-and-conditions-modal',
  templateUrl: './terms-and-conditions-modal.page.html',
  styleUrls: ['./terms-and-conditions-modal.page.scss'],
})
export class TermsAndConditionsModalPage implements OnInit {

  constructor(private mdController: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.mdController.dismiss();
  }
}
