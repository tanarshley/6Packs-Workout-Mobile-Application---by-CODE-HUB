import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drac-second-jump-squat',
  templateUrl: './drac-second-jump-squat.page.html',
  styleUrls: ['./drac-second-jump-squat.page.scss'],
})
export class DracSecondJumpSquatPage implements OnInit {

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
    this.router.navigate(['/drac-second-calf-raise']);
  }
}
