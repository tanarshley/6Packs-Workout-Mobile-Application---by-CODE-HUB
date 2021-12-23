(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_vegies-modal_vegies-modal_module_ts"],{

/***/ 58113:
/*!*************************************************************!*\
  !*** ./src/app/vegies-modal/vegies-modal-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VegiesModalPageRoutingModule": () => (/* binding */ VegiesModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _vegies_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vegies-modal.page */ 78133);




const routes = [
    {
        path: '',
        component: _vegies_modal_page__WEBPACK_IMPORTED_MODULE_0__.VegiesModalPage
    },
    {
        path: 'soy-beans-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_vegies-modal_soy-beans-modal_soy-beans-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./soy-beans-modal/soy-beans-modal.module */ 32808)).then(m => m.SoyBeansModalPageModule)
    },
    {
        path: 'broccoli-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_vegies-modal_broccoli-modal_broccoli-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./broccoli-modal/broccoli-modal.module */ 6027)).then(m => m.BroccoliModalPageModule)
    },
    {
        path: 'edamame-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_vegies-modal_edamame-modal_edamame-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./edamame-modal/edamame-modal.module */ 34651)).then(m => m.EdamameModalPageModule)
    },
    {
        path: 'spinach-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_vegies-modal_spinach-modal_spinach-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./spinach-modal/spinach-modal.module */ 12213)).then(m => m.SpinachModalPageModule)
    },
    {
        path: 'kale-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_vegies-modal_kale-modal_kale-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./kale-modal/kale-modal.module */ 63462)).then(m => m.KaleModalPageModule)
    }
];
let VegiesModalPageRoutingModule = class VegiesModalPageRoutingModule {
};
VegiesModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VegiesModalPageRoutingModule);



/***/ }),

/***/ 42942:
/*!*****************************************************!*\
  !*** ./src/app/vegies-modal/vegies-modal.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VegiesModalPageModule": () => (/* binding */ VegiesModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _vegies_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vegies-modal-routing.module */ 58113);
/* harmony import */ var _vegies_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vegies-modal.page */ 78133);







let VegiesModalPageModule = class VegiesModalPageModule {
};
VegiesModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _vegies_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.VegiesModalPageRoutingModule
        ],
        declarations: [_vegies_modal_page__WEBPACK_IMPORTED_MODULE_1__.VegiesModalPage]
    })
], VegiesModalPageModule);



/***/ }),

/***/ 78133:
/*!***************************************************!*\
  !*** ./src/app/vegies-modal/vegies-modal.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VegiesModalPage": () => (/* binding */ VegiesModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_vegies_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./vegies-modal.page.html */ 74988);
/* harmony import */ var _vegies_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vegies-modal.page.scss */ 22022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let VegiesModalPage = class VegiesModalPage {
    constructor() { }
    ngOnInit() {
    }
};
VegiesModalPage.ctorParameters = () => [];
VegiesModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-vegies-modal',
        template: _raw_loader_vegies_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_vegies_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VegiesModalPage);



/***/ }),

/***/ 22022:
/*!*****************************************************!*\
  !*** ./src/app/vegies-modal/vegies-modal.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZWdpZXMtbW9kYWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 74988:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vegies-modal/vegies-modal.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>vegiesModal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_vegies-modal_vegies-modal_module_ts.js.map