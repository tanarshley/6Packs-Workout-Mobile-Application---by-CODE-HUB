/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.page.html',
  styleUrls: ['./update-todo.page.scss'],
})
export class UpdateTodoPage implements OnInit {
  @Input() todo_obj: any;

  workout_title: string;
  workout_date: string;
  workout_reps: string;


  constructor(public modalController: ModalController, private toastController: ToastController) { }

  ngOnInit() {
    this.workout_title = this.todo_obj.workout_title;
    this.workout_date = this.todo_obj.workout_date;
    this.workout_reps = this.todo_obj.workout_reps;
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

  dismiss() {
    if (this.workout_title && this.workout_date && this.workout_reps) {
      this.todo_obj.workout_title = this.workout_title;
      this.todo_obj.workout_date = this.workout_date;
      this.todo_obj.workout_reps = this.workout_reps;
      this.modalController.dismiss(this.todo_obj);
    } else {
      this.presentToast('No changes made.');
    }
  }

}
