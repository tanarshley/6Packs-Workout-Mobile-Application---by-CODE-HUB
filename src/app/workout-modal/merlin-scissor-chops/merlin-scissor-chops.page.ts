import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-merlin-scissor-chops',
  templateUrl: './merlin-scissor-chops.page.html',
  styleUrls: ['./merlin-scissor-chops.page.scss'],
})
export class MerlinScissorChopsPage implements OnInit {

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
