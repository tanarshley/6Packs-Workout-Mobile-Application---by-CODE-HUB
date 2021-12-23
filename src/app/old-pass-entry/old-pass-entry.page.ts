/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ChangePasswordModalPage } from '../change-password-modal/change-password-modal.page';

@Component({
  selector: 'app-old-pass-entry',
  templateUrl: './old-pass-entry.page.html',
  styleUrls: ['./old-pass-entry.page.scss'],
})
export class OldPassEntryPage implements OnInit {
  public verifyOldPassForm: FormGroup;


  account_password: string;
  old_account_password: string;
  account_id: string;
  old_password: string;
  userObj: any;


  public errormsgs = {
    old_account_password: [
      { type: 'required', message: 'Enter your new password.'},
    ],
    enter_old_password: [
      { type: 'required', message: 'Enter your new password.'},
      { type: 'MustMatch', message: 'New Password does not match.'},
    ]
  };

  constructor(private fb: FormBuilder, private mdController: ModalController, private router: Router, private userService: UserService,
    private dataService: DataService) {}


    closeModal()
    {
      this.mdController.dismiss();
      this.router.navigate(['/tabs/home']);
    }


    ionViewDidEnter() {
      this.userObj = this.userService.getUser();
      console.log(this.userObj);
      this.account_id = this.userObj.userId;
      this.account_password = this.userObj.userPassword;
      this.old_password = this.userObj.userPassword;
      console.log(this.old_password);
  }

  async chpwModal() {
    const modal = await this.mdController.create({
      component: ChangePasswordModalPage,
    });
    return await modal.present();
  }

 ngOnInit() {
    this.verifyOldPassForm = this.fb.group({
      old_account_password:['',[
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$')
      ]],
      enter_old_password:['',[
        Validators.required
      ]],
    },
    {
      validators: this.MustMatch('old_account_password', 'enter_old_password')
    },
  );
 }


 // eslint-disable-next-line @typescript-eslint/member-ordering
 submitted = false;
  get f()
  {
    return this.verifyOldPassForm.controls;
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

  changePassword() {
    if (this.verifyOldPassForm.valid) {
            Swal.fire({
              icon: 'success',
              title: 'User Verified!',
              text: 'User verified. You enter the correct old password.',
              showConfirmButton: true,
              confirmButtonText: 'Next',
            }).then((result) => {
              if (result.isConfirmed) {
                this.mdController.dismiss();
                this.router.navigate(['/change-password-modal']);
              }
            });
          } else{
            Swal.fire({
              icon: 'error',
              title: 'Invalid Password',
              text: 'Incorrect old password. Please try again.',
              showConfirmButton: true,
              confirmButtonText: 'Close',
            }).then((result) => {
              if (result.isConfirmed) {
                this.mdController.dismiss();
                this.router.navigate(['/tabs/home']);
                this.verifyOldPassForm.reset();
              }
            });
      }
  }
}
