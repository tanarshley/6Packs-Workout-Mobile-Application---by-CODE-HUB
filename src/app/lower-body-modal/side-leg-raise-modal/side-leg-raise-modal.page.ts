import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-leg-raise-modal',
  templateUrl: './side-leg-raise-modal.page.html',
  styleUrls: ['./side-leg-raise-modal.page.scss'],
})
export class SideLegRaiseModalPage implements OnInit {

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
    this.router.navigate(['/flutter-kicks-modal']);
  }
}
