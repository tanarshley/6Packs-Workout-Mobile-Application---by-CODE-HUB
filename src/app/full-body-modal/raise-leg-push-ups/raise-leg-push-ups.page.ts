import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-raise-leg-push-ups',
  templateUrl: './raise-leg-push-ups.page.html',
  styleUrls: ['./raise-leg-push-ups.page.scss'],
})
export class RaiseLegPushUpsPage implements OnInit {

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
    this.router.navigate(['/side-plank-crunches']);
  }
}
