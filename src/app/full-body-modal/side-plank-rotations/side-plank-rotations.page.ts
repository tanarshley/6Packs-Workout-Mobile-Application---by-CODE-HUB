import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-side-plank-rotations',
  templateUrl: './side-plank-rotations.page.html',
  styleUrls: ['./side-plank-rotations.page.scss'],
})
export class SidePlankRotationsPage implements OnInit {


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
    this.router.navigate(['/jumping-lunges']);
  }
}
