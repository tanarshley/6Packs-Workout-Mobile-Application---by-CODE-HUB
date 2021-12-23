(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_full-body-modal_wide-squat-calf-raise_wide-squat-calf-raise_module_ts"],{

/***/ 66257:
/*!***********************************************************************************************!*\
  !*** ./src/app/full-body-modal/wide-squat-calf-raise/wide-squat-calf-raise-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WideSquatCalfRaisePageRoutingModule": () => (/* binding */ WideSquatCalfRaisePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _wide_squat_calf_raise_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wide-squat-calf-raise.page */ 41833);




const routes = [
    {
        path: '',
        component: _wide_squat_calf_raise_page__WEBPACK_IMPORTED_MODULE_0__.WideSquatCalfRaisePage
    }
];
let WideSquatCalfRaisePageRoutingModule = class WideSquatCalfRaisePageRoutingModule {
};
WideSquatCalfRaisePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WideSquatCalfRaisePageRoutingModule);



/***/ }),

/***/ 71045:
/*!***************************************************************************************!*\
  !*** ./src/app/full-body-modal/wide-squat-calf-raise/wide-squat-calf-raise.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WideSquatCalfRaisePageModule": () => (/* binding */ WideSquatCalfRaisePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _wide_squat_calf_raise_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wide-squat-calf-raise-routing.module */ 66257);
/* harmony import */ var _wide_squat_calf_raise_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wide-squat-calf-raise.page */ 41833);







let WideSquatCalfRaisePageModule = class WideSquatCalfRaisePageModule {
};
WideSquatCalfRaisePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _wide_squat_calf_raise_routing_module__WEBPACK_IMPORTED_MODULE_0__.WideSquatCalfRaisePageRoutingModule
        ],
        declarations: [_wide_squat_calf_raise_page__WEBPACK_IMPORTED_MODULE_1__.WideSquatCalfRaisePage]
    })
], WideSquatCalfRaisePageModule);



/***/ }),

/***/ 41833:
/*!*************************************************************************************!*\
  !*** ./src/app/full-body-modal/wide-squat-calf-raise/wide-squat-calf-raise.page.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WideSquatCalfRaisePage": () => (/* binding */ WideSquatCalfRaisePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_wide_squat_calf_raise_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./wide-squat-calf-raise.page.html */ 27584);
/* harmony import */ var _wide_squat_calf_raise_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wide-squat-calf-raise.page.scss */ 1613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);






let WideSquatCalfRaisePage = class WideSquatCalfRaisePage {
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
        this.router.navigate(['/wide-squat-punches']);
    }
};
WideSquatCalfRaisePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
WideSquatCalfRaisePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-wide-squat-calf-raise',
        template: _raw_loader_wide_squat_calf_raise_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_wide_squat_calf_raise_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WideSquatCalfRaisePage);



/***/ }),

/***/ 1613:
/*!***************************************************************************************!*\
  !*** ./src/app/full-body-modal/wide-squat-calf-raise/wide-squat-calf-raise.page.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\n.exit-exercise-ico {\n  font-size: 32px;\n}\n\n.time-icon {\n  font-size: 26px;\n  margin-bottom: -9px;\n  margin-top: 3px;\n}\n\n.time-chip ion-label {\n  margin-bottom: 10px;\n  margin-top: 3px;\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n}\n\nion-card {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  --background: rgb(250, 250, 250);\n}\n\nion-card-subtitle {\n  font-size: 16px;\n}\n\nion-card-content {\n  text-align: justify;\n}\n\nion-card ion-button {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 15px;\n}\n\nion-card ion-card-title {\n  text-align: left;\n}\n\nol li {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZGUtc3F1YXQtY2FsZi1yYWlzZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUdFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBSUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQURGOztBQUtFO0VBQ0UsZUFBQTtBQUZKOztBQU1BO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0FBSEY7O0FBTUE7RUFDQyxtQkFBQTtBQUhEOztBQU9FO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSko7O0FBU0U7RUFDRSxnQkFBQTtBQU5KOztBQVVBO0VBQ0UsZUFBQTtBQVBGIiwiZmlsZSI6IndpZGUtc3F1YXQtY2FsZi1yYWlzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XHJcbiAgLS1pb24tZm9udC1mYW1pbHk6ICdiYXJsb3ctZm9udC1saWdodGVyJztcclxufVxyXG5cclxuLmV4aXQtZXhlcmNpc2UtaWNve1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG5cclxuLnRpbWUtaWNvbntcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTlweDtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuXHJcbi50aW1lLWNoaXB7XHJcbiAgaW9uLWxhYmVse1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICB9XHJcbn1cclxuXHJcbmF7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICBpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXN1YnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudHtcclxuIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGlvbi1idXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBpb24tY2FyZC10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG5vbCBsaXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 27584:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/full-body-modal/wide-squat-calf-raise/wide-squat-calf-raise.page.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/tabs/workout\"></ion-back-button>\n    </ion-buttons>\n    <ion-icon slot=\"end\" class=\"exit-exercise-ico\" name=\"close-outline\" (click)=\"exitExercise()\"></ion-icon>\n    <ion-title>Wide Squat Calf Raises</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n      <img src=\"/assets/images/workout-gifs/wide-squat-calf-raises.gif\">\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <p><strong>Level:</strong> 1</p>\n            </ion-col>\n            <ion-col>\n              <p><strong>Sets:</strong> 3</p>\n            </ion-col>\n            <ion-col>\n              <p><strong>Repeat:</strong> 20x</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p><strong>Difficulty:</strong>\n                  <ion-chip color=\"success\">\n                    <ion-label>Easy</ion-label>\n                  </ion-chip>\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p><strong>Target Body Parts:</strong> Calves, glutes and inner thighs</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <br>\n        <ion-card-title>\n          <strong>Instructions</strong>\n        </ion-card-title>\n        <ol>\n          <li> Start in a sumo squat position, with your feet in a wide stance, your toes pointing out to the sides, and your thighs parallel to the floor.</li>\n          <li>Raise your heels off the floor and squeeze your calves.</li>\n          <li> Lower your heels and return to the starting position.</li>\n          <li>Repeat until the set is complete.</li>\n        </ol><br>\n        <ion-chip color=\"secondary\" class=\"time-chip\">\n          <ion-label><ion-icon name=\"time-outline\" class=\"time-icon\"></ion-icon> 1-2 minutes rest between sets.</ion-label>\n        </ion-chip><br><br>\n        <ion-label>\n          Progress:\n        </ion-label>\n        <ion-progress-bar value=\"0.50\" buffer=\"0.75\"></ion-progress-bar>\n      </ion-card-content>\n      <ion-button color=\"success\" (click)=\"nextExercise()\" expand=\"block\" mode=\"ios\">Next Exercise</ion-button>\n    </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_full-body-modal_wide-squat-calf-raise_wide-squat-calf-raise_module_ts.js.map