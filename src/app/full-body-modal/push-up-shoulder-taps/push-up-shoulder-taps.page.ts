import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-push-up-shoulder-taps',
  templateUrl: './push-up-shoulder-taps.page.html',
  styleUrls: ['./push-up-shoulder-taps.page.scss'],
})
export class PushUpShoulderTapsPage implements OnInit {

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
    this.router.navigate(['/side-plank-rotations']);
  }
}
