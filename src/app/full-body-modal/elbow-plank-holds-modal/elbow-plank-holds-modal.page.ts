import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-elbow-plank-holds-modal',
  templateUrl: './elbow-plank-holds-modal.page.html',
  styleUrls: ['./elbow-plank-holds-modal.page.scss'],
})
export class ElbowPlankHoldsModalPage implements OnInit {

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
    this.router.navigate(['/tabs/workout']);
  }
}
