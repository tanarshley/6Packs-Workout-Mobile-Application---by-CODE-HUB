(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_signup_signup_module_ts"],{

/***/ 69376:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 36727);





const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 56650:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 69376);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 36727);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 36727:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.page.html */ 21355);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 74194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 3420);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 25897);
/* harmony import */ var _terms_and_conditions_modal_terms_and_conditions_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terms-and-conditions-modal/terms-and-conditions-modal.page */ 43790);



/* eslint-disable @typescript-eslint/naming-convention */







let SignupPage = class SignupPage {
    constructor(fb, mdController, router, dataService) {
        this.fb = fb;
        this.mdController = mdController;
        this.router = router;
        this.dataService = dataService;
        this.errormsgs = {
            fullname: [
                { type: 'required', message: 'Full Name is required.' },
                { type: 'minlength', message: 'Name must be 5 characters and above.' }
            ],
            username: [
                { type: 'required', message: 'Username is required.' },
                { type: 'minlength', message: 'Username must be 5 characters and above.' },
            ],
            email: [
                { type: 'required', message: 'Email Address is required.' },
                { type: 'pattern', message: 'Enter valid Email Address.' }
            ],
            birthdate: [
                { type: 'required', message: 'Birth date is required.' },
            ],
            account_password: [
                { type: 'required', message: 'Enter your password.' },
                { type: 'minlength', message: 'Password must be 6 characters and above.' },
                { type: 'pattern', message: 'Must contains special characters and digits.' }
            ],
            account_password_confirmation: [
                { type: 'required', message: 'Enter your password.' },
                { type: 'MustMatch', message: 'Password does not match.' },
                { type: 'pattern', message: 'Must contains special characters and digits.' }
            ],
            TermsAndConditions: [
                { type: 'required', message: 'You must agree to Terms and Conditions' },
            ],
        };
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.submitted = false;
    }
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
    ngOnInit() {
        this.signupForm = this.fb.group({
            fullname: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)
                ]],
            username: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)
                ]],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+.[a-zA-Z]{2,4}$')
                ]],
            birthdate: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                ]],
            account_password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$')
                ]],
            account_password_confirmation: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$'),
                ]],
            TermsAndConditions: [false, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.requiredTrue,
                ]],
        }, {
            validators: this.MustMatch('account_password', 'account_password_confirmation')
        });
    }
    get f() {
        return this.signupForm.controls;
    }
    MustMatch(controlName, matchingControlName) {
        return (formGroup) => {
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
    termsConditionsModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _terms_and_conditions_modal_terms_and_conditions_modal_page__WEBPACK_IMPORTED_MODULE_4__.TermsAndConditionsModalPage,
            });
            return yield modal.present();
        });
    }
    onSubmit($event) {
        if (this.signupForm.valid) {
            this.dataService
                .request('register', this.signupForm.value)
                .subscribe((res) => {
                if (res.data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                        icon: 'success',
                        title: 'Welcome to 6Packs! ',
                        showCancelButton: true,
                        showConfirmButton: true,
                        confirmButtonText: 'Login now',
                        cancelButtonText: 'Close',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // console.log(this.registerForm.value);
                            this.signupForm.reset();
                            this.router.navigate(['/login']);
                        }
                        if (result.isDismissed) {
                            this.signupForm.reset();
                        }
                    });
                }
                else if (res.error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
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
};
SignupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupPage);



/***/ }),

/***/ 74194:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ion-background-color:#F8F8F8;\n}\n\n.create {\n  font-size: 24px;\n  padding-top: 5px;\n  --ion-font-family: \"barlow-font-regular\";\n}\n\n.checkbox {\n  margin-top: 12px;\n  background-color: red;\n}\n\n.error-message {\n  color: var(--ion-color-danger);\n  margin-left: 5px;\n  font-size: 14px;\n  text-align: left;\n}\n\nion-label {\n  color: #696868 !important;\n  font-size: 14px;\n}\n\nion-input {\n  font-size: 16px;\n  color: #696868 !important;\n}\n\nion-list {\n  background-color: #F8F8F8;\n  width: 250px;\n  height: 100%;\n}\n\nion-item {\n  --background: #ECECEC;\n  border-radius: 5px;\n}\n\nform {\n  --ion-font-family: \"barlow-font-lighter\";\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\nion-button {\n  font-size: 18px;\n  --background: #F6BC77;\n}\n\n.login-link {\n  font-size: 15px;\n  text-align: center;\n  position: relative;\n}\n\na {\n  color: #F6BC77;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojRjhGOEY4O1xyXG59XHJcblxyXG4uY3JlYXRle1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIC0taW9uLWZvbnQtZmFtaWx5OiAnYmFybG93LWZvbnQtcmVndWxhcic7XHJcbn1cclxuXHJcbi5jaGVja2JveHtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2V7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICBjb2xvcjogIzY5Njg2OCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuaW9uLWlucHV0e1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzY5Njg2OCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbGlzdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gIC0tYmFja2dyb3VuZDogI0VDRUNFQztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgLS1pb24tZm9udC1mYW1pbHk6ICdiYXJsb3ctZm9udC1saWdodGVyJztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIC0tYmFja2dyb3VuZDogI0Y2QkM3NztcclxufVxyXG5cclxuLmxvZ2luLWxpbmt7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjRjZCQzc3O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 21355:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n <ion-content>\n  <p class=\"ion-text-center create\">Create Account</p>\n  <form [formGroup]=\"signupForm\" ngNativeValidate (submit)=\"onSubmit($event)\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">Full Name</ion-label>\n        <ion-input type=\"text\" formControlName=\"fullname\"></ion-input>\n      </ion-item>\n\n      <div *ngFor=\"let error of errormsgs.fullname\">\n        <ng-container *ngIf=\"signupForm.controls['fullname'].errors?.required && signupForm.controls['fullname'].\n        touched\">\n          <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n      <br>\n\n      <ion-item>\n        <ion-label position=\"floating\">Username</ion-label>\n        <ion-input type=\"text\" formControlName=\"username\"></ion-input>\n      </ion-item>\n\n      <div *ngFor=\"let error of errormsgs.username\">\n        <ng-container *ngIf=\"username.hasError(error.type) && (username.dirty || username.touched)\">\n          <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n      <br>\n\n      <ion-item>\n        <ion-label position=\"floating\">Email Address</ion-label>\n        <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n      </ion-item>\n\n      <div *ngFor=\"let error of errormsgs.email\">\n        <ng-container *ngIf=\"email.hasError(error.type) && (email.dirty || email.touched)\">\n          <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n      <br>\n\n      <ion-item>\n        <ion-label position=\"floating\">MM/DD/YYYY</ion-label>\n        <ion-datetime displayFormat=\"MM/DD/YYYY\" min=\"1994-03-14\" max=\"2003-12-31\" formControlName=\"birthdate\"></ion-datetime>\n      </ion-item>\n\n      <div *ngFor=\"let error of errormsgs.birthdate\">\n        <ng-container *ngIf=\"birthdate.hasError(error.type) && (birthdate.dirty || birthdate.touched)\">\n          <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n      <br>\n\n      <ion-item>\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"account_password\"></ion-input>\n      </ion-item>\n\n      <div *ngFor=\"let error of errormsgs.account_password\">\n        <ng-container *ngIf=\"signupForm.controls['account_password'].errors?.required && signupForm.controls['account_password'].\n        touched\">\n        <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n      <br>\n\n      <ion-item>\n        <ion-label position=\"floating\">Confirm Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"account_password_confirmation\"></ion-input>\n      </ion-item>\n\n      <div *ngFor=\"let error of errormsgs.account_password_confirmation\">\n        <ng-container *ngIf=\"signupForm.controls['account_password_confirmation'].errors?.required && signupForm.controls['account_password_confirmation'].\n        touched\">\n        <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n      <br>\n      <ion-checkbox formControlName=\"TermsAndConditions\"></ion-checkbox>&nbsp; <ion-label>Agree to <a (click)=\"termsConditionsModal()\">Terms and Conditions.</a></ion-label>\n      <br>\n      <br>\n      <ion-button type=\"submit\" [attr.disabled]=\"!signupForm.valid\" expand=\"block\" mode=\"ios\">Sign up</ion-button>\n      <br>\n      <ion-label class=\"login-link\">Already have an account? <a [routerLink]=\"['/login']\">Login here.</a></ion-label>\n    </ion-list>\n  </form>\n\n</ion-content>\n</ion-app>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts.js.map