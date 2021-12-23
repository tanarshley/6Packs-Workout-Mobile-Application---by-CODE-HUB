/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.page.html',
  styleUrls: ['./add-workout.page.scss'],
})
export class AddWorkoutPage implements OnInit {
  userObj: any;
  workout_title: string;
  workout_date: string;
  workout_reps: string;

  constructor(
    private mdController: ModalController,
    private userService: UserService,
    private toastController: ToastController,
    private dataService: DataService,
    private router: Router
  ) {
    // console.log(this.userService.getUser());
    this.userObj = this.userService.getUser();
  }

     ionViewDidEnter() {
      this.workout_title = '';
      this.workout_date = '';
      this.workout_reps = '';
    }

    async presentToast(message) {
      const toast = await this.toastController.create({
        message,
        duration: 2000,
      });
      toast.present();
    }

  closeModal()
  {
    this.mdController.dismiss();
  }


  add() {
    let account_id = this.userObj.userId;
    let workout_title = this.workout_title;
    let workout_date = this.workout_date;
    let workout_reps = this.workout_reps;

    if (account_id !== '' && workout_title && workout_date && workout_reps) {
      this.dataService
        .request('inserttodo', {
          account_id,
          workout_title,
          workout_date,
          workout_reps,
        })
        .subscribe((res: any) => {
          if (res.data) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'New Plan Added',
              text: 'New plan is added to your Plans. Check it now or create a new plan again?',
              showConfirmButton: true,
              confirmButtonText: 'Check Now.',
              showCancelButton: true,
              cancelButtonText:'Create Again',
            }).then((result) => {
              if (result.isConfirmed) {
                this.mdController.dismiss();
                this.router.navigate(['/tabs/todoworkout']);
              }
              if (result.isDismissed){
                  this.ionViewDidEnter();
                }
            });
          } else if (res.error) {
            this.presentToast(res.error);
          }
        });
    } else {
      this.presentToast(' ? Fill out the fields first.');
    }
  }

  ngOnInit() {
  }

}
