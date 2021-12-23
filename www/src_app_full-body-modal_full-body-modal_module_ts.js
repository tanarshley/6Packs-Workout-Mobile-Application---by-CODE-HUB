(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_full-body-modal_full-body-modal_module_ts"],{

/***/ 87762:
/*!*******************************************************************!*\
  !*** ./src/app/full-body-modal/full-body-modal-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullBodyModalPageRoutingModule": () => (/* binding */ FullBodyModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _full_body_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full-body-modal.page */ 65099);




const routes = [
    {
        path: '',
        component: _full_body_modal_page__WEBPACK_IMPORTED_MODULE_0__.FullBodyModalPage
    },
    {
        path: 'squat-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_full-body-modal_squat-modal_squat-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./squat-modal/squat-modal.module */ 30486)).then(m => m.SquatModalPageModule)
    },
    {
        path: 'push-up-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_push-up-modal_push-up-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./push-up-modal/push-up-modal.module */ 71849)).then(m => m.PushUpModalPageModule)
    },
    {
        path: 'basic-burpees-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_basic-burpees-modal_basic-burpees-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./basic-burpees-modal/basic-burpees-modal.module */ 87587)).then(m => m.BasicBurpeesModalPageModule)
    },
    {
        path: 'reverse-angels-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_reverse-angels-modal_reverse-angels-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reverse-angels-modal/reverse-angels-modal.module */ 64328)).then(m => m.ReverseAngelsModalPageModule)
    },
    {
        path: 'elbow-plank-holds-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_elbow-plank-holds-modal_elbow-plank-holds-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./elbow-plank-holds-modal/elbow-plank-holds-modal.module */ 11594)).then(m => m.ElbowPlankHoldsModalPageModule)
    },
    {
        path: 'wide-squat',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_full-body-modal_wide-squat_wide-squat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./wide-squat/wide-squat.module */ 68327)).then(m => m.WideSquatPageModule)
    },
    {
        path: 'wide-squat-side-bend',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_wide-squat-side-bend_wide-squat-side-bend_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./wide-squat-side-bend/wide-squat-side-bend.module */ 96030)).then(m => m.WideSquatSideBendPageModule)
    },
    {
        path: 'wide-squat-calf-raise',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_wide-squat-calf-raise_wide-squat-calf-raise_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./wide-squat-calf-raise/wide-squat-calf-raise.module */ 71045)).then(m => m.WideSquatCalfRaisePageModule)
    },
    {
        path: 'wide-squat-punches',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_wide-squat-punches_wide-squat-punches_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./wide-squat-punches/wide-squat-punches.module */ 17667)).then(m => m.WideSquatPunchesPageModule)
    },
    {
        path: 'jump-squat',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_full-body-modal_jump-squat_jump-squat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./jump-squat/jump-squat.module */ 4775)).then(m => m.JumpSquatPageModule)
    },
    {
        path: 'push-up-shoulder-taps',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_push-up-shoulder-taps_push-up-shoulder-taps_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./push-up-shoulder-taps/push-up-shoulder-taps.module */ 75782)).then(m => m.PushUpShoulderTapsPageModule)
    },
    {
        path: 'side-plank-rotations',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_side-plank-rotations_side-plank-rotations_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./side-plank-rotations/side-plank-rotations.module */ 47705)).then(m => m.SidePlankRotationsPageModule)
    },
    {
        path: 'jumping-lunges',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_jumping-lunges_jumping-lunges_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./jumping-lunges/jumping-lunges.module */ 87834)).then(m => m.JumpingLungesPageModule)
    },
    {
        path: 'raise-leg-push-ups',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_raise-leg-push-ups_raise-leg-push-ups_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./raise-leg-push-ups/raise-leg-push-ups.module */ 40856)).then(m => m.RaiseLegPushUpsPageModule)
    },
    {
        path: 'side-plank-crunches',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_side-plank-crunches_side-plank-crunches_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./side-plank-crunches/side-plank-crunches.module */ 52238)).then(m => m.SidePlankCrunchesPageModule)
    }
];
let FullBodyModalPageRoutingModule = class FullBodyModalPageRoutingModule {
};
FullBodyModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FullBodyModalPageRoutingModule);



/***/ }),

/***/ 65788:
/*!***********************************************************!*\
  !*** ./src/app/full-body-modal/full-body-modal.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullBodyModalPageModule": () => (/* binding */ FullBodyModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _full_body_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full-body-modal-routing.module */ 87762);
/* harmony import */ var _full_body_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./full-body-modal.page */ 65099);







let FullBodyModalPageModule = class FullBodyModalPageModule {
};
FullBodyModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _full_body_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.FullBodyModalPageRoutingModule
        ],
        declarations: [_full_body_modal_page__WEBPACK_IMPORTED_MODULE_1__.FullBodyModalPage]
    })
], FullBodyModalPageModule);



/***/ }),

/***/ 65099:
/*!*********************************************************!*\
  !*** ./src/app/full-body-modal/full-body-modal.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullBodyModalPage": () => (/* binding */ FullBodyModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_full_body_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./full-body-modal.page.html */ 43007);
/* harmony import */ var _full_body_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./full-body-modal.page.scss */ 34949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let FullBodyModalPage = class FullBodyModalPage {
    constructor() { }
    ngOnInit() {
    }
};
FullBodyModalPage.ctorParameters = () => [];
FullBodyModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-full-body-modal',
        template: _raw_loader_full_body_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_full_body_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FullBodyModalPage);



/***/ }),

/***/ 34949:
/*!***********************************************************!*\
  !*** ./src/app/full-body-modal/full-body-modal.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLWJvZHktbW9kYWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 43007:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/full-body-modal/full-body-modal.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>fullBodyModal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_full-body-modal_full-body-modal_module_ts.js.map