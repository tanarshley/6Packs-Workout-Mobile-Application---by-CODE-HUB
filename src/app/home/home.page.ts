/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DeactivateModalPage } from '../deactivate-modal/deactivate-modal.page';
import { ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {ToastController } from '@ionic/angular';
import { ChangePasswordModalPage } from '../change-password-modal/change-password-modal.page';
import { OldPassEntryPage } from '../old-pass-entry/old-pass-entry.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectTabs = 'personal';
  // eslint-disable-next-line @typescript-eslint/naming-convention
  account_id: string;
  fullname: string;
  username: string;
  email: string;
  birthdate: string;
  account_password: string;
  userObj: any;


  constructor(public alertController: AlertController, private dataService: DataService,
    public mdController: ModalController, private router: Router, private userService: UserService,
    private toastController: ToastController) {}

  ionViewDidEnter() {
    this.userObj = this.userService.getUser();
    this.account_id = this.userObj.userId;
    this.fullname = this.userObj.userFullname;
    this.username = this.userObj.userUsername;
    this.email = this.userObj.userEmail;
    this.birthdate = this.userObj.userBirthdate;
    this.account_password = this.userObj.userPassword;
    console.log(this.userObj);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

  updateinfo(account_id, username, email, birthdate) {
    this.dataService.request('updateaccount', { account_id, username, email, birthdate }).subscribe((res: any) => {
         if (res.data) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Update Success',
          text: 'Information updated. Please re-login your account.',
          showConfirmButton: true,
          confirmButtonText: 'Login',
        }).then((result) => {
          if (result.isConfirmed) {
            this.userService.setLoggedOut();
            this.userService.clearUser();
            this.router.navigate(['/login']);
          }
        });
      }
    });
  }

  logout() {
    Swal.fire({
      title: 'Logging Out',
      text: 'Hey! Do not leave lets do workout!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Sign out',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.setLoggedOut();
        this.userService.clearUser();
        this.router.navigate(['/login']);
      }
    });
  }

  async deactModal() {
    const modal = await this.mdController.create({
      component: DeactivateModalPage,
    });
    return await modal.present();
  }

  async chpwModal() {
    const modal = await this.mdController.create({
      component: ChangePasswordModalPage,
    });
    return await modal.present();
  }

  async verifyOldPassword() {
    const modal = await this.mdController.create({
      component: OldPassEntryPage,
    });
    return await modal.present();
  }

}

