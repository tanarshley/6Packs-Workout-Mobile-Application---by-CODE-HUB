/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataService } from '../services/data.service';
import { TermsAndConditionsModalPage } from '../terms-and-conditions-modal/terms-and-conditions-modal.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public signupForm: FormGroup;

  get fullname() {
    return this.signupForm.get('fullname');
  }

  get username() {
    return this.signupForm.get('username');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get birthdate() {
    return this.signupForm.get('birthdate');
  }

  get account_password() {
    return this.signupForm.get('password');
  }

  public errormsgs = {
    fullname: [
      { type: 'required', message: 'Full Name is required.'},
      { type: 'minlength', message: 'Name must be 5 characters and above.'}
    ],
    username: [
      { type: 'required', message: 'Username is required.'},
      { type: 'minlength', message: 'Username must be 5 characters and above.'},
    ],
    email: [
      { type: 'required', message: 'Email Address is required.'},
      { type: 'pattern', message: 'Enter valid Email Address.'}
    ],
    birthdate: [
      { type: 'required', message: 'Birth date is required.'},
    ],
    account_password: [
      { type: 'required', message: 'Enter your password.'},
      { type: 'minlength', message: 'Password must be 6 characters and above.'},
      { type: 'pattern', message: 'Must contains special characters and digits.'}
    ],
    account_password_confirmation: [
      { type: 'required', message: 'Enter your password.'},
      { type: 'MustMatch', message: 'Password does not match.'},
      { type: 'pattern', message: 'Must contains special characters and digits.'}
    ],
    TermsAndConditions: [
      { type: 'required', message: 'You must agree to Terms and Conditions'},
    ],
  };


  constructor(private fb: FormBuilder, private mdController: ModalController, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fullname: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      username: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      email: ['',[
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,4}$')
      ]],
      birthdate: ['', [
        Validators.required,
      ]],
      account_password:['',[
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$')
      ]],
      account_password_confirmation:['',[
        Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$'),
      ]],
      TermsAndConditions:[false,[
        Validators.required, Validators.requiredTrue,
      ]],
    }, {
      validators: this.MustMatch('account_password', 'account_password_confirmation')
      });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  submitted = false;
  get f()
  {
    return this.signupForm.controls;
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


  async termsConditionsModal(){
      const modal = await this.mdController.create({
        component: TermsAndConditionsModalPage,
      });
      return await modal.present();
  }


  onSubmit($event) {
    if (this.signupForm.valid) {
      this.dataService
        .request('register', this.signupForm.value)
        .subscribe((res: any) => {
          if (res.data) {
            Swal.fire({
              icon: 'success',
              title: 'Welcome to 6Packs! ',
              showCancelButton: true,
              showConfirmButton: true,
              confirmButtonText: 'Login now',
              cancelButtonText:'Close',
            }).then((result) => {
              if (result.isConfirmed) {
                // console.log(this.registerForm.value);
                this.signupForm.reset();
                this.router.navigate(['/login']);
              }
              if(result.isDismissed){
                this.signupForm.reset();
              }
            });
          } else if (res.error) {
            Swal.fire({
              icon: 'error',
              title: 'Registration Failed',
              text: 'Username or email is already used. Please try different username or email.',
              showConfirmButton: true,
              confirmButtonText: 'Close',
            }).then((result) => {
              if (result.isConfirmed) {
                // console.log(this.registerForm.value);
                this.signupForm.reset();
              }
            });
          }
        });
    }
  }

}
