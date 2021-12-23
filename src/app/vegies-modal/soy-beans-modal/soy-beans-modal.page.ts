import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soy-beans-modal',
  templateUrl: './soy-beans-modal.page.html',
  styleUrls: ['./soy-beans-modal.page.scss'],
})
export class SoyBeansModalPage implements OnInit {

  constructor(private mdController: ModalController, private router: Router) {}

  ngOnInit() {
  }

  closeModal()
  {
    this.mdController.dismiss();
    this.router.navigate(['/tabs/diet']);
  }
}
