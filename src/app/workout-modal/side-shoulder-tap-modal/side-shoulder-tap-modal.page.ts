import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-shoulder-tap-modal',
  templateUrl: './side-shoulder-tap-modal.page.html',
  styleUrls: ['./side-shoulder-tap-modal.page.scss'],
})
export class SideShoulderTapModalPage implements OnInit {

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
    this.router.navigate(['/third-knee-push-up-modal']);
  }
}
