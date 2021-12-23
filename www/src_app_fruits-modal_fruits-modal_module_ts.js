(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_fruits-modal_fruits-modal_module_ts"],{

/***/ 70336:
/*!*************************************************************!*\
  !*** ./src/app/fruits-modal/fruits-modal-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FruitsModalPageRoutingModule": () => (/* binding */ FruitsModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _fruits_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fruits-modal.page */ 45607);




const routes = [
    {
        path: '',
        component: _fruits_modal_page__WEBPACK_IMPORTED_MODULE_0__.FruitsModalPage
    },
    {
        path: 'papaya-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./papaya-modal/papaya-modal.module */ 70490)).then(m => m.PapayaModalPageModule)
    },
    {
        path: 'peaches-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./peaches-modal/peaches-modal.module */ 1320)).then(m => m.PeachesModalPageModule)
    },
    {
        path: 'strawberries-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./strawberries-modal/strawberries-modal.module */ 27201)).then(m => m.StrawberriesModalPageModule)
    },
    {
        path: 'pineapple-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pineapple-modal/pineapple-modal.module */ 83839)).then(m => m.PineappleModalPageModule)
    },
    {
        path: 'blueberries-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./blueberries-modal/blueberries-modal.module */ 48308)).then(m => m.BlueberriesModalPageModule)
    }
];
let FruitsModalPageRoutingModule = class FruitsModalPageRoutingModule {
};
FruitsModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FruitsModalPageRoutingModule);



/***/ }),

/***/ 74249:
/*!*****************************************************!*\
  !*** ./src/app/fruits-modal/fruits-modal.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FruitsModalPageModule": () => (/* binding */ FruitsModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _fruits_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fruits-modal-routing.module */ 70336);
/* harmony import */ var _fruits_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fruits-modal.page */ 45607);







let FruitsModalPageModule = class FruitsModalPageModule {
};
FruitsModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fruits_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.FruitsModalPageRoutingModule
        ],
        declarations: [_fruits_modal_page__WEBPACK_IMPORTED_MODULE_1__.FruitsModalPage]
    })
], FruitsModalPageModule);



/***/ }),

/***/ 45607:
/*!***************************************************!*\
  !*** ./src/app/fruits-modal/fruits-modal.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FruitsModalPage": () => (/* binding */ FruitsModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_fruits_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./fruits-modal.page.html */ 30949);
/* harmony import */ var _fruits_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fruits-modal.page.scss */ 29367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let FruitsModalPage = class FruitsModalPage {
    constructor() { }
    ngOnInit() {
    }
};
FruitsModalPage.ctorParameters = () => [];
FruitsModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-fruits-modal',
        template: _raw_loader_fruits_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_fruits_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FruitsModalPage);



/***/ }),

/***/ 29367:
/*!*****************************************************!*\
  !*** ./src/app/fruits-modal/fruits-modal.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcnVpdHMtbW9kYWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 30949:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fruits-modal/fruits-modal.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>fruitsModal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_fruits-modal_fruits-modal_module_ts.js.map