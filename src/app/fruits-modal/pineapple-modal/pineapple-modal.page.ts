import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pineapple-modal',
  templateUrl: './pineapple-modal.page.html',
  styleUrls: ['./pineapple-modal.page.scss'],
})
export class PineappleModalPage implements OnInit {

  constructor(private mdController: ModalController, private router: Router) {}

  ngOnInit() {
  }

  closeModal()
  {
    this.mdController.dismiss();
    this.router.navigate(['/tabs/diet']);
  }
}
