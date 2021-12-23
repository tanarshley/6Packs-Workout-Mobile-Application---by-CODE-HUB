(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_workout-modal_push-up_push-up_module_ts"],{

/***/ 10290:
/*!*****************************************************************!*\
  !*** ./src/app/workout-modal/push-up/push-up-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushUpPageRoutingModule": () => (/* binding */ PushUpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _push_up_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./push-up.page */ 52986);




const routes = [
    {
        path: '',
        component: _push_up_page__WEBPACK_IMPORTED_MODULE_0__.PushUpPage
    }
];
let PushUpPageRoutingModule = class PushUpPageRoutingModule {
};
PushUpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PushUpPageRoutingModule);



/***/ }),

/***/ 31237:
/*!*********************************************************!*\
  !*** ./src/app/workout-modal/push-up/push-up.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushUpPageModule": () => (/* binding */ PushUpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _push_up_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./push-up-routing.module */ 10290);
/* harmony import */ var _push_up_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./push-up.page */ 52986);







let PushUpPageModule = class PushUpPageModule {
};
PushUpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _push_up_routing_module__WEBPACK_IMPORTED_MODULE_0__.PushUpPageRoutingModule
        ],
        declarations: [_push_up_page__WEBPACK_IMPORTED_MODULE_1__.PushUpPage]
    })
], PushUpPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_workout-modal_push-up_push-up_module_ts.js.map