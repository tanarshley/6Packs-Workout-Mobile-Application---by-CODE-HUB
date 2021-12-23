import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-drac-squat-hold-punches',
  templateUrl: './drac-squat-hold-punches.page.html',
  styleUrls: ['./drac-squat-hold-punches.page.scss'],
})
export class DracSquatHoldPunchesPage implements OnInit {

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
    this.router.navigate(['/drac-third-calf-raise']);
  }
}
