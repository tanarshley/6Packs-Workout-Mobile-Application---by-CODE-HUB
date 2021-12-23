(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_lower-body-modal_bblunge-step-ups_bblunge-step-ups_module_ts"],{

/***/ 7901:
/*!**************************************************************************************!*\
  !*** ./src/app/lower-body-modal/bblunge-step-ups/bblunge-step-ups-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BBlungeStepUpsPageRoutingModule": () => (/* binding */ BBlungeStepUpsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _bblunge_step_ups_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bblunge-step-ups.page */ 78741);




const routes = [
    {
        path: '',
        component: _bblunge_step_ups_page__WEBPACK_IMPORTED_MODULE_0__.BBlungeStepUpsPage
    }
];
let BBlungeStepUpsPageRoutingModule = class BBlungeStepUpsPageRoutingModule {
};
BBlungeStepUpsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BBlungeStepUpsPageRoutingModule);



/***/ }),

/***/ 26021:
/*!******************************************************************************!*\
  !*** ./src/app/lower-body-modal/bblunge-step-ups/bblunge-step-ups.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BBlungeStepUpsPageModule": () => (/* binding */ BBlungeStepUpsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _bblunge_step_ups_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bblunge-step-ups-routing.module */ 7901);
/* harmony import */ var _bblunge_step_ups_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bblunge-step-ups.page */ 78741);







let BBlungeStepUpsPageModule = class BBlungeStepUpsPageModule {
};
BBlungeStepUpsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bblunge_step_ups_routing_module__WEBPACK_IMPORTED_MODULE_0__.BBlungeStepUpsPageRoutingModule
        ],
        declarations: [_bblunge_step_ups_page__WEBPACK_IMPORTED_MODULE_1__.BBlungeStepUpsPage]
    })
], BBlungeStepUpsPageModule);



/***/ }),

/***/ 78741:
/*!****************************************************************************!*\
  !*** ./src/app/lower-body-modal/bblunge-step-ups/bblunge-step-ups.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BBlungeStepUpsPage": () => (/* binding */ BBlungeStepUpsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_bblunge_step_ups_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./bblunge-step-ups.page.html */ 50070);
/* harmony import */ var _bblunge_step_ups_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bblunge-step-ups.page.scss */ 2439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);






let BBlungeStepUpsPage = class BBlungeStepUpsPage {
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
        this.router.navigate(['/bbsingle-leg-bridges']);
    }
};
BBlungeStepUpsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
BBlungeStepUpsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-bblunge-step-ups',
        template: _raw_loader_bblunge_step_ups_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_bblunge_step_ups_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BBlungeStepUpsPage);



/***/ }),

/***/ 2439:
/*!******************************************************************************!*\
  !*** ./src/app/lower-body-modal/bblunge-step-ups/bblunge-step-ups.page.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\n.exit-exercise-ico {\n  font-size: 32px;\n}\n\n.time-icon {\n  font-size: 26px;\n  margin-bottom: -9px;\n  margin-top: 3px;\n}\n\n.time-chip ion-label {\n  margin-bottom: 10px;\n  margin-top: 3px;\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n}\n\nion-card {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  --background: rgb(250, 250, 250);\n}\n\nion-card-subtitle {\n  font-size: 16px;\n}\n\nion-card-content {\n  text-align: justify;\n}\n\nion-card ion-button {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 15px;\n}\n\nion-card ion-card-title {\n  text-align: left;\n}\n\nol li {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJibHVuZ2Utc3RlcC11cHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7QUFDRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFLRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQUZKOztBQU1BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFPRTtFQUNFLGVBQUE7QUFKSjs7QUFRQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQUxGOztBQVFBO0VBQ0UsZUFBQTtBQUxGOztBQVFBO0VBQ0MsbUJBQUE7QUFMRDs7QUFTRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVdFO0VBQ0UsZ0JBQUE7QUFSSjs7QUFZQTtFQUNFLGVBQUE7QUFURiIsImZpbGUiOiJiYmx1bmdlLXN0ZXAtdXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAtLWlvbi1mb250LWZhbWlseTogJ2Jhcmxvdy1mb250LWxpZ2h0ZXInO1xyXG59XHJcblxyXG5cclxuLmV4aXQtZXhlcmNpc2UtaWNve1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG5cclxuXHJcbi50aW1lLWljb257XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC05cHg7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4udGltZS1jaGlwe1xyXG4gIGlvbi1sYWJlbHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgfVxyXG59XHJcblxyXG5he1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnR7XHJcbiB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBpb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxub2wgbGl7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 50070:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lower-body-modal/bblunge-step-ups/bblunge-step-ups.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/tabs/workout\"></ion-back-button>\n    </ion-buttons>\n    <ion-icon slot=\"end\" class=\"exit-exercise-ico\" name=\"close-outline\" (click)=\"exitExercise()\"></ion-icon>\n    <ion-title>Lunge Step Ups</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n      <img src=\"/assets/images/workout-gifs/step-up-knee-raise.gif\">\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <p><strong>Level:</strong> 4</p>\n            </ion-col>\n            <ion-col>\n              <p><strong>Sets:</strong> 4</p>\n            </ion-col>\n            <ion-col>\n              <p><strong>Repeat:</strong> 14x</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p><strong>Difficulty:</strong>\n                  <ion-chip color=\"danger\">\n                    <ion-label>Hard</ion-label>\n                  </ion-chip>\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p><strong>Target Body Parts:</strong> Quads, hamstrings and glutes</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <br>\n        <ion-card-title>\n          <strong>Instructions</strong>\n        </ion-card-title>\n        <ol>\n          <li>Place a box or a step in front of you and stand up straight.</li>\n          <li>Step onto the box with your left foot and drive your right knee up.</li>\n          <li>Step down with your right foot and switch legs until the 2 sets is complete.</li>\n        </ol><br>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-chip color=\"secondary\">\n                <ion-label>2 sets per leg.</ion-label>\n              </ion-chip>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-chip color=\"secondary\"  class=\"time-chip\">\n                <ion-label><ion-icon name=\"time-outline\" class=\"time-icon\"></ion-icon> 20 seconds rest per set.</ion-label>\n              </ion-chip>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                <ion-chip color=\"secondary\" class=\"time-chip\">\n                  <ion-label><ion-icon name=\"time-outline\" class=\"time-icon\"></ion-icon> 2 minutes rest between exercises.</ion-label>\n                </ion-chip>\n              </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-label>\n          Progress:\n        </ion-label>\n        <ion-progress-bar value=\"0.50\" buffer=\"0.75\"></ion-progress-bar>\n      </ion-card-content>\n      <ion-button color=\"success\" (click)=\"nextExercise()\" expand=\"block\" mode=\"ios\">Next Exercise</ion-button>\n    </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_lower-body-modal_bblunge-step-ups_bblunge-step-ups_module_ts.js.map