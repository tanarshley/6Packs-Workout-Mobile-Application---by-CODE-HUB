import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-third-flutter-kicksl-modal',
  templateUrl: './third-flutter-kicksl-modal.page.html',
  styleUrls: ['./third-flutter-kicksl-modal.page.scss'],
})
export class ThirdFlutterKickslModalPage implements OnInit {

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
