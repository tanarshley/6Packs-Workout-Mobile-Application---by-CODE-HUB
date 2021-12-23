/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { UpdateTodoPage } from '../update-todo/update-todo.page';
import { AddWorkoutPage } from '../add-workout/add-workout.page';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todoworkout',
  templateUrl: './todoworkout.page.html',
  styleUrls: ['./todoworkout.page.scss'],
})
export class TodoworkoutPage implements OnInit {
  todos: any;
  pop = false;

  constructor( private userService: UserService, private dataService: DataService, private toastController: ToastController,
    public modalController: ModalController, private router: Router) { }

    async presentToast(message) {
      const toast = await this.toastController.create({
        message,
        duration: 2000,
      });
      toast.present();
    }

    async addWorkoutModal() {
      const modal = await this.modalController.create({
        component: AddWorkoutPage,

      });
      this.router.navigate(['/add-workout']);
      return await modal.present();
    }

    refreshPage(){
      this.ionViewDidEnter();
    }

    ionViewDidEnter() {
      let userObj = this.userService.getUser();
      let account_id = userObj.userId;

      this.dataService.request('getall', { account_id }).subscribe((res: any) => {
        if (res.data) {
          this.todos = res.data;
          if (this.todos?.length === 0) {
            this.pop = true;
            this.presentToast('No Plan listed. Add Plans now.');
        }
        else {
          this.pop = false;
        }
      }
      });
    }

    delete(workout_id, index) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to retrieve this.',
        icon: 'warning',
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Plan Delete',
                  text: 'You have successfully deleted plan.',
                  showConfirmButton: false,
                  timer: 1600
                });
              this.dataService
              .request('deletetodo', {
                workout_id: workout_id,
              })
              .subscribe((res: any) => {
              if (res.data) {
                this.todos.splice(index, 1);
                if (this.todos?.length === 0) {
                  this.pop = true;
              }
              else {
                this.pop = false;
              }
            }
                this.presentToast('No Plan listed. Add plan now.');
              });
             }
       });
  }

    done(workout_id, index) {
      this.dataService
        .request('deletetodo', { workout_id })
        .subscribe((res: any) => {
          // console.log(res);
           if (res.data) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Great Job!',
              text: 'Plan is successfully completed. Add new plan again now.',
              showConfirmButton: false,
              timer: 1600
            });
            this.todos.splice(index, 1);
            if (this.todos?.length === 0) {
              this.pop = true;
          }
            else {
              this.pop = false;
          }
          }
            this.presentToast('Great work! Plan completed.');
        });
    }

    async edit(todo_obj, index) {
      const modal = await this.modalController.create({
        component: UpdateTodoPage,
        componentProps: {
          todo_obj,
        },
        cssClass: 'my-custom-class',
      });

      modal.onDidDismiss().then((data) => {
        const update_obj = data['data'];
        // console.log(update_obj);
        if (update_obj) {
          console.log(update_obj);
          this.update(update_obj, index);
        } else {
          console.log('empty');
        }
      });

      return await modal.present();
    }

    update(update_obj, index) {
      console.log(update_obj);
      this.dataService.request('updatetodo', update_obj).subscribe((res: any) => {
        console.log(res);
        if (res.error) {
          this.presentToast(res.error);
        } else if (res.data) {
          this.todos[index] = update_obj;
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Plan Update',
            text: 'Plan update success. Check the updated plan now.',
            showConfirmButton: false,
            timer: 1600
          });
        }
      });
    }

  ngOnInit() {
  }

}
