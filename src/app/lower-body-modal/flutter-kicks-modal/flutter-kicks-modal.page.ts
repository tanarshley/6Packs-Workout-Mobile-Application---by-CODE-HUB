import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flutter-kicks-modal',
  templateUrl: './flutter-kicks-modal.page.html',
  styleUrls: ['./flutter-kicks-modal.page.scss'],
})
export class FlutterKicksModalPage implements OnInit {

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
    this.router.navigate(['/bridges-modal']);
  }
}

