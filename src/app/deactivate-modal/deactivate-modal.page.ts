/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deactivate-modal',
  templateUrl: './deactivate-modal.page.html',
  styleUrls: ['./deactivate-modal.page.scss'],
})
export class DeactivateModalPage implements OnInit {
  account_password: string;
  account_id: string;
  fullname: string;
  username: string;
  email: string;
  birthdate: string;
  userObj: any;


  constructor(private mdController: ModalController, private router: Router, private userService: UserService,
     private dataService: DataService) {}

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.userObj = this.userService.getUser();
    console.log(this.userObj);
    this.account_id = this.userObj.userId;
    this.fullname = this.userObj.userFullname;
    this.username = this.userObj.userUsername;
    this.email = this.userObj.userEmail;
    this.birthdate = this.userObj.userBirthdate;
    this.account_password = this.userObj.userPassword;
  }

  closeModal()
  {
    this.mdController.dismiss();
  }

  deactivate(account_id) {
    this.dataService
        .request('deactivate', { account_id })
        .subscribe((res: any) => {
          // console.log(res);
           if (res.data) {
            Swal.fire({
              position: 'center',
              icon: 'info',
              title: 'Deactivation Success',
              text: 'Good bye :( Hope you learn a lot from us. Always stay healthy and love your body.',
              showConfirmButton: true,
              confirmButtonText: 'Close'
            }).then((result) => {
              if (result.isConfirmed) {
                this.mdController.dismiss();
                this.userService.setLoggedOut();
                this.userService.clearUser();
                this.router.navigate(['/login']);
              }
            });
          }
  });
}
}
