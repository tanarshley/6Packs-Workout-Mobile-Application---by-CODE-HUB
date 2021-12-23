import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-wide-squat-calf-raise',
  templateUrl: './wide-squat-calf-raise.page.html',
  styleUrls: ['./wide-squat-calf-raise.page.scss'],
})
export class WideSquatCalfRaisePage implements OnInit {

  constructor(private mdController: ModalController, private router: Router) {}

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
    this.router.navigate(['/wide-squat-punches']);
  }
}
