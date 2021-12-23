(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_change-password-modal_change-password-modal_module_ts"],{

/***/ 31142:
/*!*******************************************************************************!*\
  !*** ./src/app/change-password-modal/change-password-modal-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordModalPageRoutingModule": () => (/* binding */ ChangePasswordModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _change_password_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password-modal.page */ 11266);




const routes = [
    {
        path: '',
        component: _change_password_modal_page__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordModalPage
    }
];
let ChangePasswordModalPageRoutingModule = class ChangePasswordModalPageRoutingModule {
};
ChangePasswordModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChangePasswordModalPageRoutingModule);



/***/ }),

/***/ 42383:
/*!***********************************************************************!*\
  !*** ./src/app/change-password-modal/change-password-modal.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordModalPageModule": () => (/* binding */ ChangePasswordModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _change_password_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password-modal-routing.module */ 31142);
/* harmony import */ var _change_password_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password-modal.page */ 11266);







let ChangePasswordModalPageModule = class ChangePasswordModalPageModule {
};
ChangePasswordModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _change_password_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordModalPageRoutingModule
        ],
        declarations: [_change_password_modal_page__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordModalPage]
    })
], ChangePasswordModalPageModule);



/***/ }),

/***/ 11266:
/*!*********************************************************************!*\
  !*** ./src/app/change-password-modal/change-password-modal.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordModalPage": () => (/* binding */ ChangePasswordModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_change_password_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./change-password-modal.page.html */ 53780);
/* harmony import */ var _change_password_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password-modal.page.scss */ 7140);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 25897);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ 11000);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 3420);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);



/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */







let ChangePasswordModalPage = class ChangePasswordModalPage {
    constructor(fb, mdController, router, userService, dataService) {
        this.fb = fb;
        this.mdController = mdController;
        this.router = router;
        this.userService = userService;
        this.dataService = dataService;
        this.errormsgs = {
            account_password: [
                { type: 'required', message: 'Enter your new password.' },
                { type: 'pattern', message: 'Must contains special characters and digits.' }
            ],
            account_password_confirmation: [
                { type: 'required', message: 'Enter your new password.' },
                { type: 'MustMatch', message: 'New Password does not match.' },
            ]
        };
        this.submitted = false;
    }
    closeModal() {
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
            account_password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$')
                ]],
            account_password_confirmation: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required
                ]],
        }, {
            validators: this.MustMatch('account_password', 'account_password_confirmation')
        });
    }
    get f() {
        return this.changePassForm.controls;
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
    changePassword(account_id, account_password) {
        account_password = this.changePassForm.get('account_password').value;
        if (this.changePassForm.valid) {
            this.dataService
                .request('updatepassword', { account_id, account_password })
                .subscribe((res) => {
                if (res.data) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
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
                }
                else if (res.error) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
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
};
ChangePasswordModalPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
ChangePasswordModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-change-password-modal',
        template: _raw_loader_change_password_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_change_password_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ChangePasswordModalPage);



/***/ }),

/***/ 7140:
/*!***********************************************************************!*\
  !*** ./src/app/change-password-modal/change-password-modal.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n}\n\n.error-message {\n  color: var(--ion-color-danger);\n  margin-left: 5px;\n  font-size: 14px;\n  text-align: left;\n}\n\np {\n  justify-content: left;\n  text-align: justify;\n  margin: 15px;\n}\n\nion-button {\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-bottom: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFJQTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFERiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XHJcbiAgLS1pb24tZm9udC1mYW1pbHk6ICdiYXJsb3ctZm9udC1saWdodGVyJztcclxufVxyXG5cclxuYXtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmVycm9yLW1lc3NhZ2V7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbnB7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ 53780:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-password-modal/change-password-modal.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/old-pass-entry\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"changePassForm\" ngNativeValidate (submit)=\"changePassword(account_id, account_password)\">\n    <ion-list>\n\n      <ion-item>\n        <ion-label position=\"floating\">New password</ion-label>\n        <ion-input type=\"password\" formControlName=\"account_password\"></ion-input>\n      </ion-item>\n\n      <div *ngFor=\"let error of errormsgs.account_password\">\n        <ng-container *ngIf=\"changePassForm.controls['account_password'].errors?.required &&\n        changePassForm.controls['account_password'].touched\">\n        <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label position=\"floating\">Confirm new password</ion-label>\n        <ion-input type=\"password\" formControlName=\"account_password_confirmation\"></ion-input>\n      </ion-item>\n\n      <div *ngFor=\"let error of errormsgs.account_password_confirmation\">\n        <ng-container *ngIf=\"changePassForm.controls['account_password_confirmation'].errors?.required\n         && changePassForm.controls['account_password_confirmation'].touched\">\n        <small class=\"error-message\">{{error.message}}</small>\n        </ng-container>\n      </div>\n\n      <ion-button (click)=\"changePassword(account_id, account_password)\" type=\"submit\" [attr.disabled]=\"!changePassForm.valid\" mode=\"ios\" color=\"success\" expand=\"block\">Save New Password</ion-button>\n    </ion-list>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_change-password-modal_change-password-modal_module_ts.js.map