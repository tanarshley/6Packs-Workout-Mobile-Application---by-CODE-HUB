import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edamame-modal',
  templateUrl: './edamame-modal.page.html',
  styleUrls: ['./edamame-modal.page.scss'],
})
export class EdamameModalPage implements OnInit {

  constructor(private mdController: ModalController, private router: Router) {}

  ngOnInit() {
  }

  closeModal()
  {
    this.mdController.dismiss();
    this.router.navigate(['/tabs/diet']);
  }
}

