import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arm-extenstion-modal',
  templateUrl: './arm-extenstion-modal.page.html',
  styleUrls: ['./arm-extenstion-modal.page.scss'],
})
export class ArmExtenstionModalPage implements OnInit {

  constructor(private mdController: ModalController, private router: Router) {}

  ngOnInit() {
  }

  closeModal()
  {
    this.mdController.dismiss();
    this.router.navigate(['/tabs/workout']);
  }

  exitExercise(){
    this.router.navigate(['/tabs/workout']);
  }

  nextExercise(){
    this.router.navigate(['/bicep-extenstion-modal']);
  }
}
