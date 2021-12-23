import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-flutter-kicks-modal',
  templateUrl: './second-flutter-kicks-modal.page.html',
  styleUrls: ['./second-flutter-kicks-modal.page.scss'],
})
export class SecondFlutterKicksModalPage implements OnInit {

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
    this.router.navigate(['/knee-roll-modal']);
  }
}
