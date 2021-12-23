import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drac-second-calf-raise',
  templateUrl: './drac-second-calf-raise.page.html',
  styleUrls: ['./drac-second-calf-raise.page.scss'],
})
export class DracSecondCalfRaisePage implements OnInit {

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
    this.router.navigate(['/drac-squat-hold-punches']);
  }
}
