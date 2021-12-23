import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bblunge-step-ups',
  templateUrl: './bblunge-step-ups.page.html',
  styleUrls: ['./bblunge-step-ups.page.scss'],
})
export class BBlungeStepUpsPage implements OnInit {

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
    this.router.navigate(['/bbsingle-leg-bridges']);
  }
}
