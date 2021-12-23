(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_lower-body-modal_third-flutter-kicksl-modal_third-flutter-kicksl-modal_module_ts"],{

/***/ 24750:
/*!**********************************************************************************************************!*\
  !*** ./src/app/lower-body-modal/third-flutter-kicksl-modal/third-flutter-kicksl-modal-routing.module.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThirdFlutterKickslModalPageRoutingModule": () => (/* binding */ ThirdFlutterKickslModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _third_flutter_kicksl_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./third-flutter-kicksl-modal.page */ 73931);




const routes = [
    {
        path: '',
        component: _third_flutter_kicksl_modal_page__WEBPACK_IMPORTED_MODULE_0__.ThirdFlutterKickslModalPage
    }
];
let ThirdFlutterKickslModalPageRoutingModule = class ThirdFlutterKickslModalPageRoutingModule {
};
ThirdFlutterKickslModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ThirdFlutterKickslModalPageRoutingModule);



/***/ }),

/***/ 67316:
/*!**************************************************************************************************!*\
  !*** ./src/app/lower-body-modal/third-flutter-kicksl-modal/third-flutter-kicksl-modal.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThirdFlutterKickslModalPageModule": () => (/* binding */ ThirdFlutterKickslModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _third_flutter_kicksl_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./third-flutter-kicksl-modal-routing.module */ 24750);
/* harmony import */ var _third_flutter_kicksl_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third-flutter-kicksl-modal.page */ 73931);







let ThirdFlutterKickslModalPageModule = class ThirdFlutterKickslModalPageModule {
};
ThirdFlutterKickslModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _third_flutter_kicksl_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ThirdFlutterKickslModalPageRoutingModule
        ],
        declarations: [_third_flutter_kicksl_modal_page__WEBPACK_IMPORTED_MODULE_1__.ThirdFlutterKickslModalPage]
    })
], ThirdFlutterKickslModalPageModule);



/***/ }),

/***/ 73931:
/*!************************************************************************************************!*\
  !*** ./src/app/lower-body-modal/third-flutter-kicksl-modal/third-flutter-kicksl-modal.page.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThirdFlutterKickslModalPage": () => (/* binding */ ThirdFlutterKickslModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_third_flutter_kicksl_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./third-flutter-kicksl-modal.page.html */ 21272);
/* harmony import */ var _third_flutter_kicksl_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./third-flutter-kicksl-modal.page.scss */ 12359);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);






let ThirdFlutterKickslModalPage = class ThirdFlutterKickslModalPage {
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
        this.router.navigate(['/tabs/workout']);
    }
};
ThirdFlutterKickslModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ThirdFlutterKickslModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-third-flutter-kicksl-modal',
        template: _raw_loader_third_flutter_kicksl_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_third_flutter_kicksl_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ThirdFlutterKickslModalPage);



/***/ }),

/***/ 12359:
/*!**************************************************************************************************!*\
  !*** ./src/app/lower-body-modal/third-flutter-kicksl-modal/third-flutter-kicksl-modal.page.scss ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\n.exit-exercise-ico {\n  font-size: 32px;\n}\n\n.time-icon {\n  font-size: 26px;\n  margin-bottom: -9px;\n  margin-top: 3px;\n}\n\n.time-chip ion-label {\n  margin-bottom: 10px;\n  margin-top: 3px;\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n}\n\nion-card {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  --background: rgb(250, 250, 250);\n}\n\nion-card-subtitle {\n  font-size: 16px;\n}\n\nion-card-content {\n  text-align: justify;\n}\n\nion-card ion-button {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 15px;\n}\n\nion-card ion-card-title {\n  text-align: left;\n}\n\nol li {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRoaXJkLWZsdXR0ZXIta2lja3NsLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0FBQ0Y7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBSUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBTUU7RUFDRSxlQUFBO0FBSEo7O0FBT0E7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFKRjs7QUFPQTtFQUNFLGVBQUE7QUFKRjs7QUFPQTtFQUNDLG1CQUFBO0FBSkQ7O0FBUUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFVRTtFQUNFLGdCQUFBO0FBUEo7O0FBV0E7RUFDRSxlQUFBO0FBUkYiLCJmaWxlIjoidGhpcmQtZmx1dHRlci1raWNrc2wtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gIC0taW9uLWZvbnQtZmFtaWx5OiAnYmFybG93LWZvbnQtbGlnaHRlcic7XHJcbn1cclxuXHJcblxyXG4uZXhpdC1leGVyY2lzZS1pY297XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4udGltZS1pY29ue1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBtYXJnaW4tYm90dG9tOiAtOXB4O1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLnRpbWUtY2hpcHtcclxuICBpb24tbGFiZWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIH1cclxufVxyXG5cclxuYXtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcclxuICAtLWJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxufVxyXG5cclxuaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50e1xyXG4gdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGlvbi1jYXJkLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbm9sIGxpe1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 21272:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lower-body-modal/third-flutter-kicksl-modal/third-flutter-kicksl-modal.page.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/tabs/workout\"></ion-back-button>\n    </ion-buttons>\n    <ion-icon slot=\"end\" class=\"exit-exercise-ico\" name=\"close-outline\" (click)=\"exitExercise()\"></ion-icon>\n    <ion-title>Flutter Kicks</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n      <img src=\"/assets/images/workout-gifs/flutter-kicks.gif\">\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <p><strong>Level:</strong> 1</p>\n            </ion-col>\n            <ion-col>\n              <p><strong>Sets:</strong> 3</p>\n            </ion-col>\n            <ion-col>\n              <p><strong>Repeat:</strong> 10x</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p><strong>Difficulty:</strong>\n                  <ion-chip color=\"primary\">\n                    <ion-label>Normal</ion-label>\n                  </ion-chip>\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p><strong>Target Body Parts:</strong> Shoulders and arms</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <br>\n        <ion-card-title>\n          <strong>Instructions</strong>\n        </ion-card-title>\n        <ol>\n          <li>Lie down on your back and place your hands under your glutes.</li>\n          <li>Keep your legs straight and raise your heels off the ground so they are roughly three inches off the ground.</li>\n          <li>Next, simply raise your right foot up several inches and then as you lower it down, raise your left foot up.</li>\n          <li>Alternate back and forth in a \"fluttering\" motion until the set is complete.</li>\n        </ol><br>\n        <ion-chip color=\"secondary\" class=\"time-chip\">\n          <ion-label><ion-icon name=\"time-outline\" class=\"time-icon\"></ion-icon> 1-2 minutes rest between sets.</ion-label>\n        </ion-chip><br><br>\n        <ion-label>\n          Progress:\n        </ion-label>\n        <ion-progress-bar value=\"0.85\" buffer=\"1\"></ion-progress-bar>\n      </ion-card-content>\n      <ion-button color=\"success\" (click)=\"nextExercise()\" expand=\"block\" mode=\"ios\">Exercises Done</ion-button>\n    </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_lower-body-modal_third-flutter-kicksl-modal_third-flutter-kicksl-modal_module_ts.js.map