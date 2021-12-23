import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-merlin-arm-circles',
  templateUrl: './merlin-arm-circles.page.html',
  styleUrls: ['./merlin-arm-circles.page.scss'],
})
export class MerlinArmCirclesPage implements OnInit {

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
    this.router.navigate(['/merlin-arm-scissor']);
  }
}
