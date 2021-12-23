import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blueberries-modal',
  templateUrl: './blueberries-modal.page.html',
  styleUrls: ['./blueberries-modal.page.scss'],
})
export class BlueberriesModalPage implements OnInit {

  constructor(private mdController: ModalController, private router: Router) {}

  ngOnInit() {
  }

  closeModal()
  {
    this.mdController.dismiss();
    this.router.navigate(['/tabs/diet']);
  }
}
