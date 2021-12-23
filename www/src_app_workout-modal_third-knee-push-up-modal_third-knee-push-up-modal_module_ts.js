(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_workout-modal_third-knee-push-up-modal_third-knee-push-up-modal_module_ts"],{

/***/ 59080:
/*!***************************************************************************************************!*\
  !*** ./src/app/workout-modal/third-knee-push-up-modal/third-knee-push-up-modal-routing.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThirdKneePushUpModalPageRoutingModule": () => (/* binding */ ThirdKneePushUpModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _third_knee_push_up_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./third-knee-push-up-modal.page */ 41571);




const routes = [
    {
        path: '',
        component: _third_knee_push_up_modal_page__WEBPACK_IMPORTED_MODULE_0__.ThirdKneePushUpModalPage
    }
];
let ThirdKneePushUpModalPageRoutingModule = class ThirdKneePushUpModalPageRoutingModule {
};
ThirdKneePushUpModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ThirdKneePushUpModalPageRoutingModule);



/***/ }),

/***/ 20648:
/*!*******************************************************************************************!*\
  !*** ./src/app/workout-modal/third-knee-push-up-modal/third-knee-push-up-modal.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThirdKneePushUpModalPageModule": () => (/* binding */ ThirdKneePushUpModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _third_knee_push_up_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./third-knee-push-up-modal-routing.module */ 59080);
/* harmony import */ var _third_knee_push_up_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third-knee-push-up-modal.page */ 41571);







let ThirdKneePushUpModalPageModule = class ThirdKneePushUpModalPageModule {
};
ThirdKneePushUpModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _third_knee_push_up_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThirdKneePushUpModalPageRoutingModule
        ],
        declarations: [_third_knee_push_up_modal_page__WEBPACK_IMPORTED_MODULE_1__.ThirdKneePushUpModalPage]
    })
], ThirdKneePushUpModalPageModule);



/***/ }),

/***/ 41571:
/*!*****************************************************************************************!*\
  !*** ./src/app/workout-modal/third-knee-push-up-modal/third-knee-push-up-modal.page.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThirdKneePushUpModalPage": () => (/* binding */ ThirdKneePushUpModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_third_knee_push_up_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./third-knee-push-up-modal.page.html */ 30390);
/* harmony import */ var _third_knee_push_up_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third-knee-push-up-modal.page.scss */ 14644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);






let ThirdKneePushUpModalPage = class ThirdKneePushUpModalPage {
    constructor(mdController, router) {
        this.mdController = mdController;
        this.router = router;
    }
    ngOnInit() {
    }
    closeModal() {
        this.mdController.dismiss();
        this.router.navigate(['/tabs/workout']);
    }
    exitExercise() {
        this.router.navigate(['/tabs/workout']);
    }
    nextExercise() {
        this.router.navigate(['/scissor-chop-modal']);
    }
};
ThirdKneePushUpModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ThirdKneePushUpModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-third-knee-push-up-modal',
        template: _raw_loader_third_knee_push_up_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_third_knee_push_up_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ThirdKneePushUpModalPage);



/***/ }),

/***/ 14644:
/*!*******************************************************************************************!*\
  !*** ./src/app/workout-modal/third-knee-push-up-modal/third-knee-push-up-modal.page.scss ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\n.exit-exercise-ico {\n  font-size: 32px;\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n}\n\nion-card {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  --background: rgb(250, 250, 250);\n}\n\nion-card-subtitle {\n  font-size: 16px;\n}\n\nion-card-content {\n  text-align: justify;\n}\n\nion-card ion-button {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 15px;\n}\n\n.time-icon {\n  font-size: 26px;\n  margin-bottom: -9px;\n  margin-top: 3px;\n}\n\n.time-chip ion-label {\n  margin-bottom: 10px;\n  margin-top: 3px;\n}\n\nion-card ion-card-title {\n  text-align: left;\n}\n\n.proper-form {\n  margin-top: 10px;\n  text-align: justify;\n  font-size: 16px;\n}\n\nol li {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoaXJkLWtuZWUtcHVzaC11cC1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtBQUNGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFJRTtFQUNFLGVBQUE7QUFESjs7QUFLQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUtBO0VBQ0MsbUJBQUE7QUFGRDs7QUFNRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU9BO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUpGOztBQVFFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBTEo7O0FBVUU7RUFDRSxnQkFBQTtBQVBKOztBQVdBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFSRjs7QUFXQTtFQUNFLGVBQUE7QUFSRiIsImZpbGUiOiJ0aGlyZC1rbmVlLXB1c2gtdXAtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gIC0taW9uLWZvbnQtZmFtaWx5OiAnYmFybG93LWZvbnQtbGlnaHRlcic7XHJcbn1cclxuXHJcblxyXG4uZXhpdC1leGVyY2lzZS1pY297XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG5he1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnR7XHJcbiB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBpb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRpbWUtaWNvbntcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTlweDtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuXHJcbi50aW1lLWNoaXB7XHJcbiAgaW9uLWxhYmVse1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGlvbi1jYXJkLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9wZXItZm9ybXtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5vbCBsaXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 30390:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/workout-modal/third-knee-push-up-modal/third-knee-push-up-modal.page.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/tabs/workout\"></ion-back-button>\n    </ion-buttons>\n    <ion-icon slot=\"end\" class=\"exit-exercise-ico\" name=\"close-outline\" (click)=\"exitExercise()\"></ion-icon>\n    <ion-title>Knee Push-Ups</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"/assets/images/workout-gifs/knee-push-up.gif\">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p><strong>Level:</strong> 1</p>\n          </ion-col>\n          <ion-col>\n            <p><strong>Sets:</strong> 3</p>\n          </ion-col>\n          <ion-col>\n            <p><strong>Repeat:</strong> 10x</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p><strong>Difficulty:</strong>\n                <ion-chip color=\"primary\">\n                  <ion-label>Normal</ion-label>\n                </ion-chip>\n             </p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p><strong>Target Body Parts:</strong> abs, triceps, upper back, chest and shoulders</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <br>\n      <ion-card-title>\n        <strong>Instructions</strong>\n      </ion-card-title>\n      <ol>\n        <li>Place the knees on the floor, the hands below the shoulders, and cross your feet.</li>\n        <li>Keeping your back straight, start bending the elbows until your chest is almost touching the floor.</li>\n        <li>Pause and push back to the starting position.</li>\n        <li>Repeat until the set is complete.</li>\n      </ol><br>\n      <ion-chip color=\"secondary\" class=\"time-chip\">\n        <ion-label><ion-icon name=\"time-outline\" class=\"time-icon\"></ion-icon> 1-2 minutes rest between sets.</ion-label>\n      </ion-chip><br><br>\n      <ion-label>\n        Progress:\n      </ion-label>\n      <ion-progress-bar value=\"0.66\" buffer=\"0.77\"></ion-progress-bar>\n    </ion-card-content>\n      <ion-button color=\"success\" (click)=\"nextExercise()\" expand=\"block\" mode=\"ios\">Next Exercise</ion-button>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_workout-modal_third-knee-push-up-modal_third-knee-push-up-modal_module_ts.js.map