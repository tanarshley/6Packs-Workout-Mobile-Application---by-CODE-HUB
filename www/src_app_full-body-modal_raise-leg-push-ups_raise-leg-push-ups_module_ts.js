(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_full-body-modal_raise-leg-push-ups_raise-leg-push-ups_module_ts"],{

/***/ 57664:
/*!*****************************************************************************************!*\
  !*** ./src/app/full-body-modal/raise-leg-push-ups/raise-leg-push-ups-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RaiseLegPushUpsPageRoutingModule": () => (/* binding */ RaiseLegPushUpsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _raise_leg_push_ups_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raise-leg-push-ups.page */ 48054);




const routes = [
    {
        path: '',
        component: _raise_leg_push_ups_page__WEBPACK_IMPORTED_MODULE_0__.RaiseLegPushUpsPage
    }
];
let RaiseLegPushUpsPageRoutingModule = class RaiseLegPushUpsPageRoutingModule {
};
RaiseLegPushUpsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RaiseLegPushUpsPageRoutingModule);



/***/ }),

/***/ 40856:
/*!*********************************************************************************!*\
  !*** ./src/app/full-body-modal/raise-leg-push-ups/raise-leg-push-ups.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RaiseLegPushUpsPageModule": () => (/* binding */ RaiseLegPushUpsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _raise_leg_push_ups_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raise-leg-push-ups-routing.module */ 57664);
/* harmony import */ var _raise_leg_push_ups_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raise-leg-push-ups.page */ 48054);







let RaiseLegPushUpsPageModule = class RaiseLegPushUpsPageModule {
};
RaiseLegPushUpsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _raise_leg_push_ups_routing_module__WEBPACK_IMPORTED_MODULE_0__.RaiseLegPushUpsPageRoutingModule
        ],
        declarations: [_raise_leg_push_ups_page__WEBPACK_IMPORTED_MODULE_1__.RaiseLegPushUpsPage]
    })
], RaiseLegPushUpsPageModule);



/***/ }),

/***/ 48054:
/*!*******************************************************************************!*\
  !*** ./src/app/full-body-modal/raise-leg-push-ups/raise-leg-push-ups.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RaiseLegPushUpsPage": () => (/* binding */ RaiseLegPushUpsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_raise_leg_push_ups_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./raise-leg-push-ups.page.html */ 75833);
/* harmony import */ var _raise_leg_push_ups_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./raise-leg-push-ups.page.scss */ 47303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);






let RaiseLegPushUpsPage = class RaiseLegPushUpsPage {
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
        this.router.navigate(['/side-plank-crunches']);
    }
};
RaiseLegPushUpsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
RaiseLegPushUpsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-raise-leg-push-ups',
        template: _raw_loader_raise_leg_push_ups_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_raise_leg_push_ups_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RaiseLegPushUpsPage);



/***/ }),

/***/ 47303:
/*!*********************************************************************************!*\
  !*** ./src/app/full-body-modal/raise-leg-push-ups/raise-leg-push-ups.page.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\n.exit-exercise-ico {\n  font-size: 32px;\n}\n\n.time-icon {\n  font-size: 26px;\n  margin-bottom: -9px;\n  margin-top: 3px;\n}\n\n.time-chip ion-label {\n  margin-bottom: 10px;\n  margin-top: 3px;\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n}\n\nion-card {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  --background: rgb(250, 250, 250);\n}\n\nion-card-subtitle {\n  font-size: 16px;\n}\n\nion-card-content {\n  text-align: justify;\n}\n\nion-card ion-button {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 15px;\n}\n\nion-card ion-card-title {\n  text-align: left;\n}\n\n.proper-form {\n  margin-top: 10px;\n  text-align: justify;\n  font-size: 16px;\n}\n\nol li {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhaXNlLWxlZy1wdXNoLXVwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtBQUNGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUlFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBS0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUZGOztBQU1FO0VBQ0UsZUFBQTtBQUhKOztBQU9BO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0FBSkY7O0FBT0E7RUFDQyxtQkFBQTtBQUpEOztBQVFFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBVUU7RUFDRSxnQkFBQTtBQVBKOztBQVdBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFSRjs7QUFXQTtFQUNFLGVBQUE7QUFSRiIsImZpbGUiOiJyYWlzZS1sZWctcHVzaC11cHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gIC0taW9uLWZvbnQtZmFtaWx5OiAnYmFybG93LWZvbnQtbGlnaHRlcic7XHJcbn1cclxuXHJcblxyXG4uZXhpdC1leGVyY2lzZS1pY297XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4udGltZS1pY29ue1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBtYXJnaW4tYm90dG9tOiAtOXB4O1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLnRpbWUtY2hpcHtcclxuICBpb24tbGFiZWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIH1cclxufVxyXG5cclxuYXtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcclxuICAtLWJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxufVxyXG5cclxuaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50e1xyXG4gdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGlvbi1jYXJkLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9wZXItZm9ybXtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5vbCBsaXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 75833:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/full-body-modal/raise-leg-push-ups/raise-leg-push-ups.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/tabs/workout\"></ion-back-button>\n    </ion-buttons>\n    <ion-icon slot=\"end\" class=\"exit-exercise-ico\" name=\"close-outline\" (click)=\"exitExercise()\"></ion-icon>\n    <ion-title>Raise Leg Push Ups</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"/assets/images/workout-gifs/leg-raise-push-up.gif\">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p><strong>Level:</strong> 1</p>\n          </ion-col>\n          <ion-col>\n            <p><strong>Sets:</strong> 3</p>\n          </ion-col>\n          <ion-col>\n            <p><strong>Repeat:</strong> 6x</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p><strong>Difficulty:</strong>\n                <ion-chip color=\"danger\">\n                  <ion-label>Hard</ion-label>\n                </ion-chip>\n             </p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p><strong>Target Body Parts:</strong> Full body</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <br>\n      <ion-card-title>\n        <strong>Instructions</strong>\n      </ion-card-title>\n      <ol>\n        <li>Starting Position: Kneel on an exercise mat or floor and bring your feet together behind you.</li>\n        <li>Slowly bend forward to place your palms flat on the mat, positioning your hands shoulder-width\n          apart with your fingers facing forward. Slowly shift your weight forward until your shoulders are\n           positioned directly over your hands.</li>\n        <li>Downward Phase: Slowly lower your body towards the floor while maintaining a rigid torso and head aligned with your spine.</li>\n        <li>Upward Phase: Press upwards through your arms while maintaining a rigid torso and head\n          aligned with your spine. As your press upwards, extend your left hip to lift your left foot off the floor,\n          keeping the knee extended.</li>\n        <li>Repeat until the set is complete.</li>\n      </ol><br>\n      <ion-chip color=\"secondary\" class=\"time-chip\">\n        <ion-label><ion-icon name=\"time-outline\" class=\"time-icon\"></ion-icon> 1-2 minutes rest between sets.</ion-label>\n      </ion-chip><br><br>\n      <ion-label>\n        Progress:\n      </ion-label>\n      <ion-progress-bar value=\"0.68\" buffer=\"0.85\"></ion-progress-bar>\n      </ion-card-content>\n      <ion-button color=\"success\" (click)=\"nextExercise()\" expand=\"block\" mode=\"ios\">Exercises Done</ion-button>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_full-body-modal_raise-leg-push-ups_raise-leg-push-ups_module_ts.js.map