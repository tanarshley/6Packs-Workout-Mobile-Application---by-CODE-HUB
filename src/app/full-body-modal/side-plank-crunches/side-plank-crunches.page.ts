import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-side-plank-crunches',
  templateUrl: './side-plank-crunches.page.html',
  styleUrls: ['./side-plank-crunches.page.scss'],
})
export class SidePlankCrunchesPage implements OnInit {

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
