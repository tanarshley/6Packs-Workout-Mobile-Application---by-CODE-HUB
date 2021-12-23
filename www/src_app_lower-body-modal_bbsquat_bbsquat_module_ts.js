(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_lower-body-modal_bbsquat_bbsquat_module_ts"],{

/***/ 77840:
/*!********************************************************************!*\
  !*** ./src/app/lower-body-modal/bbsquat/bbsquat-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BBsquatPageRoutingModule": () => (/* binding */ BBsquatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _bbsquat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbsquat.page */ 91610);




const routes = [
    {
        path: '',
        component: _bbsquat_page__WEBPACK_IMPORTED_MODULE_0__.BBsquatPage
    }
];
let BBsquatPageRoutingModule = class BBsquatPageRoutingModule {
};
BBsquatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BBsquatPageRoutingModule);



/***/ }),

/***/ 23198:
/*!************************************************************!*\
  !*** ./src/app/lower-body-modal/bbsquat/bbsquat.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BBsquatPageModule": () => (/* binding */ BBsquatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _bbsquat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbsquat-routing.module */ 77840);
/* harmony import */ var _bbsquat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bbsquat.page */ 91610);







let BBsquatPageModule = class BBsquatPageModule {
};
BBsquatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _bbsquat_routing_module__WEBPACK_IMPORTED_MODULE_0__.BBsquatPageRoutingModule
        ],
        declarations: [_bbsquat_page__WEBPACK_IMPORTED_MODULE_1__.BBsquatPage]
    })
], BBsquatPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_lower-body-modal_bbsquat_bbsquat_module_ts.js.map