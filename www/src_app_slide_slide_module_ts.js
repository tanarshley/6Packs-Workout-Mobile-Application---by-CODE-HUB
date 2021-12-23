(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_slide_slide_module_ts"],{

/***/ 20748:
/*!***********************************************!*\
  !*** ./src/app/slide/slide-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlidePageRoutingModule": () => (/* binding */ SlidePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _slide_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide.page */ 45755);




const routes = [
    {
        path: '',
        component: _slide_page__WEBPACK_IMPORTED_MODULE_0__.SlidePage
    }
];
let SlidePageRoutingModule = class SlidePageRoutingModule {
};
SlidePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SlidePageRoutingModule);



/***/ }),

/***/ 66677:
/*!***************************************!*\
  !*** ./src/app/slide/slide.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlidePageModule": () => (/* binding */ SlidePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _slide_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide-routing.module */ 20748);
/* harmony import */ var _slide_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide.page */ 45755);







let SlidePageModule = class SlidePageModule {
};
SlidePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _slide_routing_module__WEBPACK_IMPORTED_MODULE_0__.SlidePageRoutingModule
        ],
        declarations: [_slide_page__WEBPACK_IMPORTED_MODULE_1__.SlidePage]
    })
], SlidePageModule);



/***/ }),

/***/ 45755:
/*!*************************************!*\
  !*** ./src/app/slide/slide.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlidePage": () => (/* binding */ SlidePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_slide_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./slide.page.html */ 26050);
/* harmony import */ var _slide_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide.page.scss */ 79457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let SlidePage = class SlidePage {
    constructor() { }
    ngOnInit() {
    }
};
SlidePage.ctorParameters = () => [];
SlidePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-slide',
        template: _raw_loader_slide_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_slide_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SlidePage);



/***/ }),

/***/ 79457:
/*!***************************************!*\
  !*** ./src/app/slide/slide.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\nion-content {\n  font-family: \"barlow-font-lighter\";\n}\n\nh2 {\n  font-family: \"barlow-font-regular\";\n}\n\n.swiper-slide {\n  display: block;\n}\n\nion-slide > img {\n  margin: 36px 0;\n}\n\np {\n  margin-bottom: 29px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRiIsImZpbGUiOiJzbGlkZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcclxuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICBmb250LWZhbWlseTogJ2Jhcmxvdy1mb250LWxpZ2h0ZXInO1xyXG59XHJcblxyXG5oMntcclxuICBmb250LWZhbWlseTogJ2Jhcmxvdy1mb250LXJlZ3VsYXInO1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW9uLXNsaWRlID4gaW1nIHtcclxuICBtYXJnaW46IDM2cHggMDtcclxufVxyXG5cclxucHtcclxuICBtYXJnaW4tYm90dG9tOiAyOXB4O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 26050:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/slide/slide.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <ion-slides pager=\"true\">\n\n    <ion-slide>\n      <img src=\"./assets/slider-images/slide-exercise-11.png\"/>\n      <h2>Welcome to <b>6Packs</b></h2>\n      <p>The <b>6Packs</b> is a home workout mobile appication that offers different exercises<br>and health tips.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"./assets/slider-images/slide-exercise-1.png\"/>\n      <h2>No Equipment Needed</h2>\n      <p><b>6Packs</b> exercises does not require any gym equipments. You can use any things available in your home for improvises.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"./assets/slider-images/slide-exercise-2.png\"/>\n      <h2>Easy to Follow Exercises</h2>\n      <p><b>6Packs</b> show proper way and doing\n        <br>workout. Each exercise have a short video instruction in order to follow and do the exercise right. </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"./assets/slider-images/slide-exercise-3.png\"/>\n      <h2>Healthy Diet Tips</h2>\n      <p><b>6Packs</b> offers healthy diet tips that will <br>help your body to be strong and fit and information\n      about fruits, vegetables and more.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"./assets/slider-images/6packs-slide-icon.png\"/>\n      <h2>Welcome to 6Packs!</h2>\n      <ion-button fill=\"clear\" [routerLink]=\"['/login']\">Sign In <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></ion-button><br>\n      <ion-button fill=\"clear\" [routerLink]=\"['/signup']\">Create Account <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon></ion-button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_slide_slide_module_ts.js.map