/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.page.html',
  styleUrls: ['./change-password-modal.page.scss'],
})
export class ChangePasswordModalPage implements OnInit {
  public changePassForm: FormGroup;


  account_password: string;
  old_password: string;
  account_id: string;
  userObj: any;


  public errormsgs = {
    account_password: [
      { type: 'required', message: 'Enter your new password.'},
      { type: 'pattern', message: 'Must contains special characters and digits.'}
    ],
    account_password_confirmation: [
      { type: 'required', message: 'Enter your new password.'},
      { type: 'MustMatch', message: 'New Password does not match.'},
    ]
  };

  constructor(private fb: FormBuilder, private mdController: ModalController, private router: Router, private userService: UserService,
    private dataService: DataService) {}


    closeModal()
    {
      this.mdController.dismiss();
      this.router.navigate(['/old-pass-entry']);
    }


    ionViewDidEnter() {
      this.userObj = this.userService.getUser();
      console.log(this.userObj);
      this.account_id = this.userObj.userId;
      this.account_password = this.userObj.userPassword;
      this.old_password = this.userObj.userPassword;
      console.log(this.old_password);
  }

 ngOnInit() {
    this.changePassForm = this.fb.group({
      account_password:['',[
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$')
      ]],
      account_password_confirmation:['',[
        Validators.required
      ]],
    },
    {
      validators: this.MustMatch('account_password', 'account_password_confirmation')
    });
 }


 submitted = false;
  get f()
  {
    return this.changePassForm.controls;
  }
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
    return;
    }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      }
      else {
        matchingControl.setErrors(null);
        }
      };
   }


  changePassword(account_id, account_password) {
    account_password = this.changePassForm.get('account_password').value;
    if (this.changePassForm.valid) {
      this.dataService
      .request('updatepassword', {account_id, account_password})
        .subscribe((res: any) => {
          if (res.data) {
            Swal.fire({
              icon: 'success',
              title: 'Password Changed!',
              text: 'Password change successfully. Please re-login your account.',
              showConfirmButton: true,
              confirmButtonText: 'Login',
            }).then((result) => {
              if (result.isConfirmed) {
                this.changePassForm.reset();
                this.userService.setLoggedOut();
                this.userService.clearUser();
                this.router.navigate(['/login']);
              }
            });
          } else if (res.error) {
            Swal.fire({
              icon: 'error',
              title: 'Failed!',
              text: 'Please try again.',
              showConfirmButton: true,
              confirmButtonText: 'Okay',
            }).then((result) => {
              if (result.isConfirmed) {
                this.changePassForm.reset();
              }
            });
          }
        });
    }
  }
}
