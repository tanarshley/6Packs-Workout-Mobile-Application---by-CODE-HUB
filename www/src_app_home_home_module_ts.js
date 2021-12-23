(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_home_home_module_ts"],{

/***/ 65089:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 19460);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 82711:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 19460);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 65089);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 19460:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 49764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _deactivate_modal_deactivate_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../deactivate-modal/deactivate-modal.page */ 1328);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 25897);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ 11000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 3420);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _change_password_modal_change_password_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../change-password-modal/change-password-modal.page */ 11266);
/* harmony import */ var _old_pass_entry_old_pass_entry_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../old-pass-entry/old-pass-entry.page */ 27395);



/* eslint-disable @typescript-eslint/naming-convention */











let HomePage = class HomePage {
    constructor(alertController, dataService, mdController, router, userService, toastController) {
        this.alertController = alertController;
        this.dataService = dataService;
        this.mdController = mdController;
        this.router = router;
        this.userService = userService;
        this.toastController = toastController;
        this.selectTabs = 'personal';
    }
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
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 2000,
            });
            toast.present();
        });
    }
    updateinfo(account_id, username, email, birthdate) {
        this.dataService.request('updateaccount', { account_id, username, email, birthdate }).subscribe((res) => {
            if (res.data) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
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
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
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
    deactModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _deactivate_modal_deactivate_modal_page__WEBPACK_IMPORTED_MODULE_2__.DeactivateModalPage,
            });
            return yield modal.present();
        });
    }
    chpwModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _change_password_modal_change_password_modal_page__WEBPACK_IMPORTED_MODULE_6__.ChangePasswordModalPage,
            });
            return yield modal.present();
        });
    }
    verifyOldPassword() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _old_pass_entry_old_pass_entry_page__WEBPACK_IMPORTED_MODULE_7__.OldPassEntryPage,
            });
            return yield modal.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".profile-section {\n  justify-content: center;\n  display: flex;\n}\n\nion-toolbar {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\n.avatar {\n  margin: auto;\n  width: 120px;\n  height: 120px;\n}\n\nion-button {\n  padding-left: 8px;\n  padding-right: 8px;\n  --background: #F36C6C;\n}\n\nion-label ion-item {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\n.segment-label {\n  font-size: 14px;\n}\n\nion-segment {\n  --ion-font-family: \"barlow-font-regular\" !important;\n}\n\n.personal-icon, .settings-icon {\n  font-size: 35px;\n}\n\n.deact-icon {\n  font-size: 24px;\n  margin-top: 20px;\n}\n\nion-item a {\n  text-decoration: none !important;\n  color: black;\n}\n\n.list-title {\n  --border-color: white;\n}\n\n.current {\n  float: left;\n  margin-left: -18px;\n}\n\n.current ion-label {\n  float: left;\n  justify-content: left;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFHRTtFQUNFLHdDQUFBO0FBQUo7O0FBSUE7RUFDRSxlQUFBO0FBREY7O0FBSUE7RUFDRSxtREFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBS0k7RUFDRSxnQ0FBQTtFQUNBLFlBQUE7QUFGTjs7QUFNQTtFQUNFLHFCQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFJRTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRkoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1zZWN0aW9ue1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuaW9uLXRvb2xiYXJ7XG4gIC0taW9uLWZvbnQtZmFtaWx5OiAnYmFybG93LWZvbnQtbGlnaHRlcic7XG59XG5cbi5hdmF0YXJ7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xufVxuXG5pb24tYnV0dG9ue1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICAtLWJhY2tncm91bmQ6ICNGMzZDNkM7XG59XG5cbmlvbi1sYWJlbHtcbiAgaW9uLWl0ZW17XG4gICAgLS1pb24tZm9udC1mYW1pbHk6ICdiYXJsb3ctZm9udC1saWdodGVyJztcbiAgfVxufVxuXG4uc2VnbWVudC1sYWJlbHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5pb24tc2VnbWVudHtcbiAgLS1pb24tZm9udC1mYW1pbHk6ICdiYXJsb3ctZm9udC1yZWd1bGFyJyAhaW1wb3J0YW50O1xufVxuXG4ucGVyc29uYWwtaWNvbiwgLnNldHRpbmdzLWljb257XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmRlYWN0LWljb257XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLWl0ZW17XG4gICAgYXtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgfVxufVxuXG4ubGlzdC10aXRsZXtcbiAgLS1ib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG4uY3VycmVudHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAtMThweDtcbiAgaW9uLWxhYmVse1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ 49764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title class=\"ion-text-center\">Profile</ion-title>\n    </ion-toolbar>\n  </ion-header>\n<br>\n  <div class=\"profile-selection\">\n    <ion-avatar class=\"avatar\">\n      <img src=\"/assets/photos/profile.jpg\">\n    </ion-avatar>\n    <h4 class=\"ion-text-center\">{{ fullname }}</h4>\n  </div>\n    <br>\n  <div class=\"personal-information\">\n\n    <ion-segment [(ngModel)]='selectTabs'>\n        <ion-segment-button value=\"personal\">\n          <ion-label class=\"segment-label\">Personal Information</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button value=\"settings\">\n          <ion-label class=\"segment-label\">Account Settings</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n\n    <div class=\"segment-content-personal\" *ngIf=\"selectTabs === 'personal'\">\n    <ion-card class=\"user-information\">\n      <ion-list>\n        <ion-item class=\"list-title\">\n          <h3>Personal Information</h3>\n          <ion-icon class=\"personal-icon\" name=\"person-circle-outline\" slot=\"end\"></ion-icon>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Username</ion-label>\n          <ion-chip color=\"secondary\">\n              <ion-label class=\"user-usename\">{{ username }}</ion-label>\n          </ion-chip>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Birth Date</ion-label>\n          <ion-chip color=\"secondary\">\n              <ion-label class=\"user-date\">{{ birthdate }}</ion-label>\n          </ion-chip>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Email</ion-label>\n          <ion-chip color=\"secondary\">\n              <ion-label class=\"user-email\">{{ email }}</ion-label>\n          </ion-chip>\n        </ion-item>\n\n      </ion-list>\n    </ion-card>\n    </div>\n\n    <div class=\"segment-content\" *ngIf=\"selectTabs === 'settings'\">\n     <ion-card class=\"account-settings\">\n      <ion-list>\n\n        <ion-item class=\"list-title\">\n          <h3>Account Settings</h3>\n          <ion-icon class=\"settings-icon\" name=\"settings-outline\" slot=\"end\"></ion-icon>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Username</ion-label>\n           <ion-input inputmode=\"text\" [(ngModel)]=\"username\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Email Address</ion-label>\n          <ion-input inputmode=\"email\" [(ngModel)]=\"email\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">MM/DD/YYYY</ion-label>\n          <ion-datetime displayFormat=\"MM/DD/YYYY\" min=\"1994-03-14\" max=\"2003-12-31\"\n          placeholder=\"Select Date\" [(ngModel)]=\"birthdate\"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <a (click)=\"deactModal()\">Deactivate My Account</a>\n        </ion-item>\n\n        <ion-item>\n          <a (click)=\"verifyOldPassword()\" defaultHref=\"/old-pass-entry\">Change password</a>\n        </ion-item>\n        <br>\n        <ion-button (click)=\"updateinfo(account_id, username, email, birthdate)\" mode=\"ios\" color=\"light\" expand=\"block\"><ion-icon name=\"checkmark-outline\" slot=\"start\"></ion-icon>Save Changes</ion-button>\n      </ion-list>\n     </ion-card>\n    </div>\n  </div>\n  <ion-button (click)=\"logout()\" color=\"danger\" mode=\"ios\" expand=\"block\"><ion-icon name=\"log-out-outline\"></ion-icon>&nbsp;Log Out</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map