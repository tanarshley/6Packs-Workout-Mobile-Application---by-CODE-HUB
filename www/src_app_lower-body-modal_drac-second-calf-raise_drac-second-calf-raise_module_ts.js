(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_lower-body-modal_drac-second-calf-raise_drac-second-calf-raise_module_ts"],{

/***/ 74215:
/*!**************************************************************************************************!*\
  !*** ./src/app/lower-body-modal/drac-second-calf-raise/drac-second-calf-raise-routing.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DracSecondCalfRaisePageRoutingModule": () => (/* binding */ DracSecondCalfRaisePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _drac_second_calf_raise_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drac-second-calf-raise.page */ 30860);




const routes = [
    {
        path: '',
        component: _drac_second_calf_raise_page__WEBPACK_IMPORTED_MODULE_0__.DracSecondCalfRaisePage
    }
];
let DracSecondCalfRaisePageRoutingModule = class DracSecondCalfRaisePageRoutingModule {
};
DracSecondCalfRaisePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DracSecondCalfRaisePageRoutingModule);



/***/ }),

/***/ 88246:
/*!******************************************************************************************!*\
  !*** ./src/app/lower-body-modal/drac-second-calf-raise/drac-second-calf-raise.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DracSecondCalfRaisePageModule": () => (/* binding */ DracSecondCalfRaisePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _drac_second_calf_raise_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drac-second-calf-raise-routing.module */ 74215);
/* harmony import */ var _drac_second_calf_raise_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drac-second-calf-raise.page */ 30860);







let DracSecondCalfRaisePageModule = class DracSecondCalfRaisePageModule {
};
DracSecondCalfRaisePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _drac_second_calf_raise_routing_module__WEBPACK_IMPORTED_MODULE_0__.DracSecondCalfRaisePageRoutingModule
        ],
        declarations: [_drac_second_calf_raise_page__WEBPACK_IMPORTED_MODULE_1__.DracSecondCalfRaisePage]
    })
], DracSecondCalfRaisePageModule);



/***/ }),

/***/ 30860:
/*!****************************************************************************************!*\
  !*** ./src/app/lower-body-modal/drac-second-calf-raise/drac-second-calf-raise.page.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DracSecondCalfRaisePage": () => (/* binding */ DracSecondCalfRaisePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_drac_second_calf_raise_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./drac-second-calf-raise.page.html */ 91219);
/* harmony import */ var _drac_second_calf_raise_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drac-second-calf-raise.page.scss */ 45962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);






let DracSecondCalfRaisePage = class DracSecondCalfRaisePage {
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
        this.router.navigate(['/drac-squat-hold-punches']);
    }
};
DracSecondCalfRaisePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
DracSecondCalfRaisePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-drac-second-calf-raise',
        template: _raw_loader_drac_second_calf_raise_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_drac_second_calf_raise_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DracSecondCalfRaisePage);



/***/ }),

/***/ 45962:
/*!******************************************************************************************!*\
  !*** ./src/app/lower-body-modal/drac-second-calf-raise/drac-second-calf-raise.page.scss ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\n.exit-exercise-ico {\n  font-size: 32px;\n}\n\n.time-icon {\n  font-size: 26px;\n  margin-bottom: -9px;\n  margin-top: 3px;\n}\n\n.time-chip ion-label {\n  margin-bottom: 10px;\n  margin-top: 3px;\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n}\n\nion-card {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  --background: rgb(250, 250, 250);\n}\n\nion-card-subtitle {\n  font-size: 16px;\n}\n\nion-card-content {\n  text-align: justify;\n}\n\nion-card ion-button {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 15px;\n}\n\nion-card ion-card-title {\n  text-align: left;\n}\n\nol li {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYWMtc2Vjb25kLWNhbGYtcmFpc2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFHRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFLRTtFQUNFLGVBQUE7QUFGSjs7QUFNQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQU1BO0VBQ0MsbUJBQUE7QUFIRDs7QUFPRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUpKOztBQVNFO0VBQ0UsZ0JBQUE7QUFOSjs7QUFVQTtFQUNFLGVBQUE7QUFQRiIsImZpbGUiOiJkcmFjLXNlY29uZC1jYWxmLXJhaXNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAtLWlvbi1mb250LWZhbWlseTogJ2Jhcmxvdy1mb250LWxpZ2h0ZXInO1xyXG59XHJcblxyXG4uZXhpdC1leGVyY2lzZS1pY297XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG4udGltZS1pY29ue1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBtYXJnaW4tYm90dG9tOiAtOXB4O1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuLnRpbWUtY2hpcHtcclxuICBpb24tbGFiZWx7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIH1cclxufVxyXG5cclxuYXtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcclxuICAtLWJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxufVxyXG5cclxuaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50e1xyXG4gdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGlvbi1jYXJkLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuXHJcbm9sIGxpe1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 91219:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lower-body-modal/drac-second-calf-raise/drac-second-calf-raise.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/tabs/workout\"></ion-back-button>\n    </ion-buttons>\n    <ion-icon slot=\"end\" class=\"exit-exercise-ico\" name=\"close-outline\" (click)=\"exitExercise()\"></ion-icon>\n    <ion-title>Calf Raises</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n      <img src=\"/assets/images/workout-gifs/jump-squat.gif\">\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <p><strong>Level:</strong> 1</p>\n            </ion-col>\n            <ion-col>\n              <p><strong>Sets:</strong> 3</p>\n            </ion-col>\n            <ion-col>\n              <p><strong>Repeat:</strong> 10x</p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p><strong>Difficulty:</strong>\n                  <ion-chip color=\"Success\">\n                    <ion-label>Easy</ion-label>\n                  </ion-chip>\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p><strong>Target Body Parts:</strong> Calves and lower leg</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <br>\n        <ion-card-title>\n          <strong>Instructions</strong>\n        </ion-card-title>\n        <ol>\n          <li>Stand with your torso upright, your feet hip-width apart, and your toes pointing forward.</li>\n          <li>Raise your heels off the floor and squeeze your calves.</li>\n          <li>Return to the starting position, by slowly lowering your heels, and repeat.</li>\n          <li>Repeat until the set is complete.</li>\n        </ol><br>\n        <ion-chip color=\"secondary\" class=\"time-chip\">\n          <ion-label><ion-icon name=\"time-outline\" class=\"time-icon\"></ion-icon> 1-2 minutes rest between sets.</ion-label>\n        </ion-chip><br><br>\n        <ion-label>\n          Progress:\n        </ion-label>\n        <ion-progress-bar value=\"0.51\" buffer=\"0.68\"></ion-progress-bar>\n      </ion-card-content>\n      <ion-button color=\"success\" (click)=\"nextExercise()\" expand=\"block\" mode=\"ios\">Next Exercise</ion-button>\n    </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_lower-body-modal_drac-second-calf-raise_drac-second-calf-raise_module_ts.js.map