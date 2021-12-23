import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bicep-extenstion-modal',
  templateUrl: './bicep-extenstion-modal.page.html',
  styleUrls: ['./bicep-extenstion-modal.page.scss'],
})
export class BicepExtenstionModalPage implements OnInit {

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
    this.router.navigate(['/second-knee-push-up-modal']);
  }
}
