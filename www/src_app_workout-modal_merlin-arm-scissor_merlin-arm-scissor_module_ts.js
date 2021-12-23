(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_workout-modal_merlin-arm-scissor_merlin-arm-scissor_module_ts"],{

/***/ 1321:
/*!***************************************************************************************!*\
  !*** ./src/app/workout-modal/merlin-arm-scissor/merlin-arm-scissor-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MerlinArmScissorPageRoutingModule": () => (/* binding */ MerlinArmScissorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _merlin_arm_scissor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merlin-arm-scissor.page */ 69623);




const routes = [
    {
        path: '',
        component: _merlin_arm_scissor_page__WEBPACK_IMPORTED_MODULE_0__.MerlinArmScissorPage
    }
];
let MerlinArmScissorPageRoutingModule = class MerlinArmScissorPageRoutingModule {
};
MerlinArmScissorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MerlinArmScissorPageRoutingModule);



/***/ }),

/***/ 62682:
/*!*******************************************************************************!*\
  !*** ./src/app/workout-modal/merlin-arm-scissor/merlin-arm-scissor.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MerlinArmScissorPageModule": () => (/* binding */ MerlinArmScissorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _merlin_arm_scissor_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merlin-arm-scissor-routing.module */ 1321);
/* harmony import */ var _merlin_arm_scissor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merlin-arm-scissor.page */ 69623);







let MerlinArmScissorPageModule = class MerlinArmScissorPageModule {
};
MerlinArmScissorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _merlin_arm_scissor_routing_module__WEBPACK_IMPORTED_MODULE_0__.MerlinArmScissorPageRoutingModule
        ],
        declarations: [_merlin_arm_scissor_page__WEBPACK_IMPORTED_MODULE_1__.MerlinArmScissorPage]
    })
], MerlinArmScissorPageModule);



/***/ }),

/***/ 69623:
/*!*****************************************************************************!*\
  !*** ./src/app/workout-modal/merlin-arm-scissor/merlin-arm-scissor.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MerlinArmScissorPage": () => (/* binding */ MerlinArmScissorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_merlin_arm_scissor_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./merlin-arm-scissor.page.html */ 62117);
/* harmony import */ var _merlin_arm_scissor_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./merlin-arm-scissor.page.scss */ 48880);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);






let MerlinArmScissorPage = class MerlinArmScissorPage {
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
        this.router.navigate(['/merlin-scissor-chops']);
    }
};
MerlinArmScissorPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
MerlinArmScissorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-merlin-arm-scissor',
        template: _raw_loader_merlin_arm_scissor_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_merlin_arm_scissor_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MerlinArmScissorPage);



/***/ }),

/***/ 48880:
/*!*******************************************************************************!*\
  !*** ./src/app/workout-modal/merlin-arm-scissor/merlin-arm-scissor.page.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\n.exit-exercise-ico {\n  font-size: 32px;\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n}\n\nion-card {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  --background: rgb(250, 250, 250);\n}\n\nion-card-subtitle {\n  font-size: 16px;\n}\n\nion-card-content {\n  text-align: justify;\n}\n\nion-card ion-button {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 15px;\n}\n\nion-card ion-card-title {\n  text-align: left;\n}\n\n.proper-form {\n  margin-top: 10px;\n  text-align: justify;\n  font-size: 16px;\n}\n\nol li {\n  font-size: 16px;\n}\n\n.time-icon {\n  font-size: 26px;\n  margin-bottom: -9px;\n  margin-top: 3px;\n}\n\n.time-chip ion-label {\n  margin-bottom: 10px;\n  margin-top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lcmxpbi1hcm0tc2Npc3Nvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtBQUNGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFJRTtFQUNFLGVBQUE7QUFESjs7QUFLQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUtBO0VBQ0MsbUJBQUE7QUFGRDs7QUFNRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUhKOztBQVFFO0VBQ0UsZ0JBQUE7QUFMSjs7QUFTQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTkY7O0FBVUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFQSiIsImZpbGUiOiJtZXJsaW4tYXJtLXNjaXNzb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gIC0taW9uLWZvbnQtZmFtaWx5OiAnYmFybG93LWZvbnQtbGlnaHRlcic7XHJcbn1cclxuXHJcblxyXG4uZXhpdC1leGVyY2lzZS1pY297XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG5he1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnR7XHJcbiB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBpb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuLnByb3Blci1mb3Jte1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbm9sIGxpe1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRpbWUtaWNvbntcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTlweDtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuXHJcbi50aW1lLWNoaXB7XHJcbiAgaW9uLWxhYmVse1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 62117:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/workout-modal/merlin-arm-scissor/merlin-arm-scissor.page.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/tabs/workout\"></ion-back-button>\n    </ion-buttons>\n    <ion-icon slot=\"end\" class=\"exit-exercise-ico\" name=\"close-outline\" (click)=\"exitExercise()\"></ion-icon>\n    <ion-title>Arm Scissors</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n      <img src=\"/assets/images/workout-gifs/arm-scissors.gif\">\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <p><strong>Level:</strong> 1</p>\n            </ion-col>\n            <ion-col>\n              <p><strong>Sets:</strong> 3</p>\n            </ion-col>\n            <ion-col>\n              <p><strong>Repeat:</strong> 20x</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p><strong>Difficulty:</strong>\n                  <ion-chip color=\"success\">\n                    <ion-label>Easy</ion-label>\n                  </ion-chip>\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p><strong>Target Body Parts:</strong> Shoulders and arms</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <br>\n        <ion-card-title>\n          <strong>Instructions</strong>\n        </ion-card-title>\n        <ol>\n          <li>Stand up straight with your knees and form cross arm position (your right arm to the left and left arm to the right straightly).</li>\n          <li>Move both arms opposite to their position simultaneously. Make sure you move both arms straightly.</li>\n          <li>Repeat the two steps correctly until the set is complete.</li>\n        </ol><br>\n        <ion-chip color=\"secondary\" class=\"time-chip\">\n          <ion-label><ion-icon name=\"time-outline\" class=\"time-icon\"></ion-icon> 1-2 minutes rest between sets.</ion-label>\n        </ion-chip><br><br>\n        <ion-label>\n          Progress:\n        </ion-label>\n        <ion-progress-bar value=\"0.50\" buffer=\"0.75\"></ion-progress-bar>\n      </ion-card-content>\n      <ion-button color=\"success\" (click)=\"nextExercise()\" expand=\"block\" mode=\"ios\">Next Exercise</ion-button>\n    </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_workout-modal_merlin-arm-scissor_merlin-arm-scissor_module_ts.js.map