import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-jump-squat',
  templateUrl: './jump-squat.page.html',
  styleUrls: ['./jump-squat.page.scss'],
})
export class JumpSquatPage implements OnInit {

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
    this.mdController.dismiss();
    this.router.navigate(['/push-up-shoulder-taps']);
  }
}
