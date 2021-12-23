(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_full-body-modal_jump-squat_jump-squat_module_ts"],{

/***/ 33829:
/*!*************************************************************************!*\
  !*** ./src/app/full-body-modal/jump-squat/jump-squat-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JumpSquatPageRoutingModule": () => (/* binding */ JumpSquatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _jump_squat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jump-squat.page */ 56328);




const routes = [
    {
        path: '',
        component: _jump_squat_page__WEBPACK_IMPORTED_MODULE_0__.JumpSquatPage
    }
];
let JumpSquatPageRoutingModule = class JumpSquatPageRoutingModule {
};
JumpSquatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], JumpSquatPageRoutingModule);



/***/ }),

/***/ 4775:
/*!*****************************************************************!*\
  !*** ./src/app/full-body-modal/jump-squat/jump-squat.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JumpSquatPageModule": () => (/* binding */ JumpSquatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _jump_squat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jump-squat-routing.module */ 33829);
/* harmony import */ var _jump_squat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jump-squat.page */ 56328);







let JumpSquatPageModule = class JumpSquatPageModule {
};
JumpSquatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _jump_squat_routing_module__WEBPACK_IMPORTED_MODULE_0__.JumpSquatPageRoutingModule
        ],
        declarations: [_jump_squat_page__WEBPACK_IMPORTED_MODULE_1__.JumpSquatPage]
    })
], JumpSquatPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_full-body-modal_jump-squat_jump-squat_module_ts.js.map