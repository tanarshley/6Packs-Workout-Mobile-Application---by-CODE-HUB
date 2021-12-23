import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-knee-push-up-modal',
  templateUrl: './third-knee-push-up-modal.page.html',
  styleUrls: ['./third-knee-push-up-modal.page.scss'],
})
export class ThirdKneePushUpModalPage implements OnInit {

  constructor(private mdController: ModalController, private router: Router) {

  }

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
    this.router.navigate(['/scissor-chop-modal']);
  }
}
