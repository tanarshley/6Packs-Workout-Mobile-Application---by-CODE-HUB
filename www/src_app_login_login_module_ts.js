(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_login_login_module_ts"],{

/***/ 90795:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 93721);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 77641:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 90795);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 93721);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 93721:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 21339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 3420);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ 25897);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ 11000);










let LoginPage = class LoginPage {
    constructor(fb, router, toastController, dataService, userService) {
        this.fb = fb;
        this.router = router;
        this.toastController = toastController;
        this.dataService = dataService;
        this.userService = userService;
        this.errormsgs = {
            username: [
                { type: 'required', message: 'Enter your username.' },
            ],
            password: [
                { type: 'required', message: 'Enter your password.' },
                { type: 'pattern', message: 'Password is incorrect.' }
            ]
        };
    }
    get username() {
        return this.loginForm.get('username');
    }
    get password() {
        return this.loginForm.get('password');
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            username: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required
                ]]
        });
    }
    ionViewDidEnter() {
        if (this.userService.isLoggedIn()) {
            // eslint-disable-next-line no-underscore-dangle
            this.router.navigate(['tabs']);
        }
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 2000,
            });
            toast.present();
        });
    }
    forgotpass() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
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
            .subscribe((res) => {
            if (res.data) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    position: 'center',
                    icon: 'success',
                    title: 'SIGNED IN',
                    html: 'Welcome to 6Packs ' + this.name + '. Stay FIT and HEALTHY!',
                    showConfirmButton: false,
                    timer: 1700
                });
                this.userService.setUser(res.data);
                this.loginForm.reset();
                this.userService.setLoggedIn();
                // eslint-disable-next-line no-underscore-dangle
                this.router.navigate(['/tabs']);
            }
            else if (res.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
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
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 21339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --ion-background-color:#F8F8F8;\n}\n\nimg {\n  width: 180px;\n  height: 180px;\n  display: flex;\n  margin: auto;\n}\n\n.error-message {\n  color: var(--ion-color-danger);\n  margin-left: 15px;\n  font-size: 14px;\n}\n\n.create {\n  font-weight: 500;\n  padding-top: 5px;\n  position: relative;\n  --ion-font-family: \"barlow-font-regular\";\n}\n\nion-label {\n  color: #696868 !important;\n  font-size: 14px;\n}\n\nion-input {\n  font-size: 16px;\n  color: #696868 !important;\n}\n\nion-list {\n  background-color: #F8F8F8;\n  width: 250px;\n}\n\nion-item {\n  --background: #ECECEC;\n  border-radius: 5px;\n}\n\nform {\n  --ion-font-family: \"barlow-font-lighter\";\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  height: 45%;\n}\n\n.forgot-link {\n  font-size: 14px;\n  position: relative;\n  float: right;\n  padding: 8px;\n}\n\nion-button {\n  font-size: 18px;\n  --background: #F6BC77;\n}\n\n.create-link {\n  font-size: 15px;\n  text-align: center;\n  position: absolute;\n  bottom: 60px;\n}\n\na {\n  color: #F6BC77;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFFRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLHdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQUVGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I0Y4RjhGODt9XHJcblxyXG5pbWd7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5lcnJvci1tZXNzYWdle1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jcmVhdGV7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtLWlvbi1mb250LWZhbWlseTogJ2Jhcmxvdy1mb250LXJlZ3VsYXInO1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgY29sb3I6ICM2OTY4NjggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbmlvbi1pbnB1dHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICM2OTY4NjggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxpc3R7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gIC0tYmFja2dyb3VuZDogI0VDRUNFQztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgLS1pb24tZm9udC1mYW1pbHk6ICdiYXJsb3ctZm9udC1saWdodGVyJztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OjQ1JTtcclxufVxyXG5cclxuLmZvcmdvdC1saW5re1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjRjZCQzc3O1xyXG59XHJcblxyXG4uY3JlYXRlLWxpbmt7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogI0Y2QkM3NztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <img src=\"/assets/app-icon/6packs-icon.png\">\n  <h1 class=\"ion-text-center create\">Sign In</h1>\n  <form [formGroup]=\"loginForm\" ngNativeValidate (submit)=\"onSubmit($event)\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">Username</ion-label>\n        <ion-input [(ngModel)]=\"name\" inputmode=\"text\" formControlName=\"username\"></ion-input>\n      </ion-item>\n\n      <div *ngFor=\"let error of errormsgs.username\">\n        <ng-container *ngIf=\"username.hasError(error.type) && (username.dirty || username.touched)\">\n          <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n      <br>\n\n      <ion-item>\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n\n      <div *ngFor=\"let error of errormsgs.password\">\n        <ng-container *ngIf=\"password.hasError(error.type) && (password.dirty || password.touched)\">\n          <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n      <ion-label class=\"forgot-link\">\n        <a (click)=\" forgotpass()\">Forgot password?</a>\n      </ion-label>\n      <br><br><br>\n\n      <ion-button type=\"submit\"  [disabled]=\"!loginForm.valid\" expand=\"block\" mode=\"ios\">Login</ion-button><br>\n    </ion-list>\n    <ion-label class=\"create-link\">Don't have any account? <a href=\"/signup\">Create here.</a></ion-label>\n  </form>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map