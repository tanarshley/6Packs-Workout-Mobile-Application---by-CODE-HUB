import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  loggedIn: boolean = false;

  userId: string;
  userFullname: string;
  userUsername: string;
  userEmail: string;
  userBirthdate: string;
  userPassword: string;


  userObj = { userId: '', userFullname: '', userUsername: '', userEmail: '', userBirthdate: '', userPassword: '' };

  constructor() {}

  setUser(userObj: any) {
    this.userObj.userId = userObj.account_id;
    this.userObj.userFullname = userObj.fullname;
    this.userObj.userUsername = userObj.username;
    this.userObj.userEmail = userObj.email;
    this.userObj.userBirthdate = userObj.birthdate;
    this.userObj.userPassword = userObj.account_password;
  }

  getUser() {
    return this.userObj;
  }

  clearUser() {
    this.userObj = { userId: '', userFullname: '', userUsername: '', userEmail: '', userBirthdate: '', userPassword: '' };
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn() {
    this.loggedIn = true;
  }

  setLoggedOut() {
    this.loggedIn = false;
  }
}

