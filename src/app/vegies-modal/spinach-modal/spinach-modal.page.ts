import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spinach-modal',
  templateUrl: './spinach-modal.page.html',
  styleUrls: ['./spinach-modal.page.scss'],
})
export class SpinachModalPage implements OnInit {

  constructor(private mdController: ModalController, private router: Router) {}

  ngOnInit() {
  }

  closeModal()
  {
    this.mdController.dismiss();
    this.router.navigate(['/tabs/diet']);
  }
}

