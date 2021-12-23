import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-merlin-arm-scissor',
  templateUrl: './merlin-arm-scissor.page.html',
  styleUrls: ['./merlin-arm-scissor.page.scss'],
})
export class MerlinArmScissorPage implements OnInit {

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
    this.router.navigate(['/merlin-scissor-chops']);
  }
}
