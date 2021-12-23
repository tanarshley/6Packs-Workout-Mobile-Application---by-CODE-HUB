(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_workout-modal_side-shoulder-tap-modal_side-shoulder-tap-modal_module_ts"],{

/***/ 57035:
/*!*************************************************************************************************!*\
  !*** ./src/app/workout-modal/side-shoulder-tap-modal/side-shoulder-tap-modal-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideShoulderTapModalPageRoutingModule": () => (/* binding */ SideShoulderTapModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _side_shoulder_tap_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-shoulder-tap-modal.page */ 89010);




const routes = [
    {
        path: '',
        component: _side_shoulder_tap_modal_page__WEBPACK_IMPORTED_MODULE_0__.SideShoulderTapModalPage
    }
];
let SideShoulderTapModalPageRoutingModule = class SideShoulderTapModalPageRoutingModule {
};
SideShoulderTapModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SideShoulderTapModalPageRoutingModule);



/***/ }),

/***/ 92849:
/*!*****************************************************************************************!*\
  !*** ./src/app/workout-modal/side-shoulder-tap-modal/side-shoulder-tap-modal.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideShoulderTapModalPageModule": () => (/* binding */ SideShoulderTapModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _side_shoulder_tap_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-shoulder-tap-modal-routing.module */ 57035);
/* harmony import */ var _side_shoulder_tap_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-shoulder-tap-modal.page */ 89010);







let SideShoulderTapModalPageModule = class SideShoulderTapModalPageModule {
};
SideShoulderTapModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _side_shoulder_tap_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.SideShoulderTapModalPageRoutingModule
        ],
        declarations: [_side_shoulder_tap_modal_page__WEBPACK_IMPORTED_MODULE_1__.SideShoulderTapModalPage]
    })
], SideShoulderTapModalPageModule);



/***/ }),

/***/ 89010:
/*!***************************************************************************************!*\
  !*** ./src/app/workout-modal/side-shoulder-tap-modal/side-shoulder-tap-modal.page.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideShoulderTapModalPage": () => (/* binding */ SideShoulderTapModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_side_shoulder_tap_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./side-shoulder-tap-modal.page.html */ 93531);
/* harmony import */ var _side_shoulder_tap_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-shoulder-tap-modal.page.scss */ 58644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);






let SideShoulderTapModalPage = class SideShoulderTapModalPage {
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
        this.router.navigate(['/third-knee-push-up-modal']);
    }
};
SideShoulderTapModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SideShoulderTapModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-side-shoulder-tap-modal',
        template: _raw_loader_side_shoulder_tap_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_side_shoulder_tap_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SideShoulderTapModalPage);



/***/ }),

/***/ 58644:
/*!*****************************************************************************************!*\
  !*** ./src/app/workout-modal/side-shoulder-tap-modal/side-shoulder-tap-modal.page.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\n.exit-exercise-ico {\n  font-size: 32px;\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n}\n\nion-card {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  --background: rgb(250, 250, 250);\n}\n\nion-card-subtitle {\n  font-size: 16px;\n}\n\nion-card-content {\n  text-align: justify;\n}\n\nion-card ion-button {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 15px;\n}\n\n.time-icon {\n  font-size: 26px;\n  margin-bottom: -9px;\n  margin-top: 3px;\n}\n\n.time-chip ion-label {\n  margin-bottom: 10px;\n  margin-top: 3px;\n}\n\nion-card ion-card-title {\n  text-align: left;\n}\n\n.proper-form {\n  margin-top: 10px;\n  text-align: justify;\n  font-size: 16px;\n}\n\nol li {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtc2hvdWxkZXItdGFwLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUdFO0VBQ0UsZUFBQTtBQUFKOztBQUlBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0FBREY7O0FBSUE7RUFDQyxtQkFBQTtBQUREOztBQUtFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRko7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSEY7O0FBT0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFKSjs7QUFTRTtFQUNFLGdCQUFBO0FBTko7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtBQVBGIiwiZmlsZSI6InNpZGUtc2hvdWxkZXItdGFwLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAtLWlvbi1mb250LWZhbWlseTogJ2Jhcmxvdy1mb250LWxpZ2h0ZXInO1xyXG59XHJcblxyXG4uZXhpdC1leGVyY2lzZS1pY297XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG5he1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnR7XHJcbiB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBpb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRpbWUtaWNvbntcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTlweDtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuXHJcbi50aW1lLWNoaXB7XHJcbiAgaW9uLWxhYmVse1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGlvbi1jYXJkLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9wZXItZm9ybXtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5vbCBsaXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 93531:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/workout-modal/side-shoulder-tap-modal/side-shoulder-tap-modal.page.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/tabs/workout\"></ion-back-button>\n    </ion-buttons>\n    <ion-icon slot=\"end\" class=\"exit-exercise-ico\" name=\"close-outline\" (click)=\"exitExercise()\"></ion-icon>\n    <ion-title>Side Shoulder Taps</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n      <img src=\"/assets/images/workout-gifs/shoulder-taps.gif\">\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <p><strong>Level:</strong> 1</p>\n            </ion-col>\n            <ion-col>\n              <p><strong>Sets:</strong> 3</p>\n            </ion-col>\n            <ion-col>\n              <p><strong>Repeat:</strong> 10x</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p><strong>Difficulty:</strong>\n                  <ion-chip color=\"primary\">\n                    <ion-label>Normal</ion-label>\n                  </ion-chip>\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p><strong>Target Body Parts:</strong> Shoulders and arms</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <br>\n        <ion-card-title>\n          <strong>Instructions</strong>\n        </ion-card-title>\n        <ol>\n          <li>Stand up straight with your knees and bend your arms and point your hands in your upper back.</li>\n          <li>Lift up and bend both of your arms straightly to their sides.</li>\n          <li>Repeat the two steps correctly until the set is complete.</li>\n        </ol><br>\n        <ion-chip color=\"secondary\" class=\"time-chip\">\n          <ion-label><ion-icon name=\"time-outline\" class=\"time-icon\"></ion-icon> 1-2 minutes rest between sets.</ion-label>\n        </ion-chip><br><br>\n        <ion-label>\n          Progress:\n        </ion-label>\n        <ion-progress-bar value=\"0.55\" buffer=\"0.66\"></ion-progress-bar>\n      </ion-card-content>\n      <ion-button color=\"success\" (click)=\"nextExercise()\" expand=\"block\" mode=\"ios\">Exercise Done</ion-button>\n    </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_workout-modal_side-shoulder-tap-modal_side-shoulder-tap-modal_module_ts.js.map