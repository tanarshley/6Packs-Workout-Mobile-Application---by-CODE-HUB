import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drac-jump-squat',
  templateUrl: './drac-jump-squat.page.html',
  styleUrls: ['./drac-jump-squat.page.scss'],
})
export class DracJumpSquatPage implements OnInit {

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
    this.router.navigate(['/drac-calf-raise']);
  }
}
