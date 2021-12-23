import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataService } from '../services/data.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  name: string;

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public errormsgs = {
    username: [
      { type: 'required', message: 'Enter your username.'},
    ],
    password: [
      { type: 'required', message: 'Enter your password.'},
      { type: 'pattern', message: 'Password is incorrect.'}
    ]
  };

  constructor(private fb: FormBuilder, private router: Router, public toastController: ToastController,
    private dataService: DataService, private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required,
      ]],
      password: ['',[
        Validators.required
      ]]
    });
  }

  ionViewDidEnter() {
    if (this.userService.isLoggedIn()) {
      // eslint-disable-next-line no-underscore-dangle
      this.router.navigate(['tabs']);
    }
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

  forgotpass() {
    Swal.fire({
      icon: 'error',
      title: 'Feature Unavailable',
      text: 'This feature will be coming soon. Thank you for understanding.' +
       'Keep your password always in your mind to avoid forgotten password.',
      confirmButtonText: 'I understand'
    });
  }

  onSubmit($event) {
    this.dataService
      .request('login', this.loginForm.value)
      .subscribe((res: any) => {
        if (res.data) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'SIGNED IN',
            html:
            'Welcome to 6Packs ' + this.name + '. Stay FIT and HEALTHY!',
            showConfirmButton: false,
            timer: 1700
          });
          this.userService.setUser(res.data);
          this.loginForm.reset();
          this.userService.setLoggedIn();
          // eslint-disable-next-line no-underscore-dangle
          this.router.navigate(['/tabs']);
        } else if (res.error) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Unable to Sign In',
            text: 'Incorrect username or password. Please try again.',
            showConfirmButton: false,
            timer: 1800
          });
        }
      });
  }

}
