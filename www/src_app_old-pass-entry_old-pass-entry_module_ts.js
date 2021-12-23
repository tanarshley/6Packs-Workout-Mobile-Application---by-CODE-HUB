(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_old-pass-entry_old-pass-entry_module_ts"],{

/***/ 39971:
/*!*****************************************************************!*\
  !*** ./src/app/old-pass-entry/old-pass-entry-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OldPassEntryPageRoutingModule": () => (/* binding */ OldPassEntryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _old_pass_entry_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./old-pass-entry.page */ 27395);




const routes = [
    {
        path: '',
        component: _old_pass_entry_page__WEBPACK_IMPORTED_MODULE_0__.OldPassEntryPage
    }
];
let OldPassEntryPageRoutingModule = class OldPassEntryPageRoutingModule {
};
OldPassEntryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OldPassEntryPageRoutingModule);



/***/ }),

/***/ 63991:
/*!*********************************************************!*\
  !*** ./src/app/old-pass-entry/old-pass-entry.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OldPassEntryPageModule": () => (/* binding */ OldPassEntryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _old_pass_entry_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./old-pass-entry-routing.module */ 39971);
/* harmony import */ var _old_pass_entry_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./old-pass-entry.page */ 27395);







let OldPassEntryPageModule = class OldPassEntryPageModule {
};
OldPassEntryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _old_pass_entry_routing_module__WEBPACK_IMPORTED_MODULE_0__.OldPassEntryPageRoutingModule
        ],
        declarations: [_old_pass_entry_page__WEBPACK_IMPORTED_MODULE_1__.OldPassEntryPage]
    })
], OldPassEntryPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_old-pass-entry_old-pass-entry_module_ts.js.map