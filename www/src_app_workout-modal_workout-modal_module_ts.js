(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_workout-modal_workout-modal_module_ts"],{

/***/ 93578:
/*!***************************************************************!*\
  !*** ./src/app/workout-modal/workout-modal-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutModalPageRoutingModule": () => (/* binding */ WorkoutModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _workout_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workout-modal.page */ 18248);




const routes = [
    {
        path: '',
        component: _workout_modal_page__WEBPACK_IMPORTED_MODULE_0__.WorkoutModalPage
    },
    {
        path: 'knee-push-up-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_workout-modal_knee-push-up-modal_knee-push-up-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./knee-push-up-modal/knee-push-up-modal.module */ 11602)).then(m => m.KneePushUpModalPageModule)
    },
    {
        path: 'arm-extenstion-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_arm-extenstion-modal_arm-extenstion-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./arm-extenstion-modal/arm-extenstion-modal.module */ 38530)).then(m => m.ArmExtenstionModalPageModule)
    },
    {
        path: 'bicep-extenstion-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_bicep-extenstion-modal_bicep-extenstion-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./bicep-extenstion-modal/bicep-extenstion-modal.module */ 83320)).then(m => m.BicepExtenstionModalPageModule)
    },
    {
        path: 'shoulder-tap-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_shoulder-tap-modal_shoulder-tap-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shoulder-tap-modal/shoulder-tap-modal.module */ 10826)).then(m => m.ShoulderTapModalPageModule)
    },
    {
        path: 'side-shoulder-tap-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_side-shoulder-tap-modal_side-shoulder-tap-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./side-shoulder-tap-modal/side-shoulder-tap-modal.module */ 92849)).then(m => m.SideShoulderTapModalPageModule)
    },
    {
        path: 'scissor-chop-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_scissor-chop-modal_scissor-chop-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./scissor-chop-modal/scissor-chop-modal.module */ 60452)).then(m => m.ScissorChopModalPageModule)
    },
    {
        path: 'arm-scissor-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_arm-scissor-modal_arm-scissor-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./arm-scissor-modal/arm-scissor-modal.module */ 96362)).then(m => m.ArmScissorModalPageModule)
    },
    {
        path: 'second-knee-push-up-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_second-knee-push-up-modal_second-knee-push-up-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./second-knee-push-up-modal/second-knee-push-up-modal.module */ 84163)).then(m => m.SecondKneePushUpModalPageModule)
    },
    {
        path: 'third-knee-push-up-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_third-knee-push-up-modal_third-knee-push-up-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./third-knee-push-up-modal/third-knee-push-up-modal.module */ 20648)).then(m => m.ThirdKneePushUpModalPageModule)
    },
    {
        path: 'merlin-chest-expansion',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_workout-modal_merlin-chest-expansion_merlin-chest-expansion_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./merlin-chest-expansion/merlin-chest-expansion.module */ 83588)).then(m => m.MerlinChestExpansionPageModule)
    },
    {
        path: 'merlin-arm-circles',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_merlin-arm-circles_merlin-arm-circles_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./merlin-arm-circles/merlin-arm-circles.module */ 99310)).then(m => m.MerlinArmCirclesPageModule)
    },
    {
        path: 'merlin-arm-scissor',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_merlin-arm-scissor_merlin-arm-scissor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./merlin-arm-scissor/merlin-arm-scissor.module */ 62682)).then(m => m.MerlinArmScissorPageModule)
    },
    {
        path: 'merlin-scissor-chops',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_merlin-scissor-chops_merlin-scissor-chops_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./merlin-scissor-chops/merlin-scissor-chops.module */ 67005)).then(m => m.MerlinScissorChopsPageModule)
    },
    {
        path: 'push-up',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_workout-modal_push-up_push-up_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./push-up/push-up.module */ 31237)).then(m => m.PushUpPageModule)
    },
    {
        path: 'shoulder-tap',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_shoulder-tap_shoulder-tap_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shoulder-tap/shoulder-tap.module */ 91410)).then(m => m.ShoulderTapPageModule)
    },
    {
        path: 'second-push-up',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_second-push-up_second-push-up_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./second-push-up/second-push-up.module */ 37794)).then(m => m.SecondPushUpPageModule)
    },
    {
        path: 'plank-hold',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_plank-hold_plank-hold_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./plank-hold/plank-hold.module */ 92456)).then(m => m.PlankHoldPageModule)
    },
    {
        path: 'plank-side-crunches',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_plank-side-crunches_plank-side-crunches_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./plank-side-crunches/plank-side-crunches.module */ 95665)).then(m => m.PlankSideCrunchesPageModule)
    },
    {
        path: 'second-plank-hold',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_second-plank-hold_second-plank-hold_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./second-plank-hold/second-plank-hold.module */ 57521)).then(m => m.SecondPlankHoldPageModule)
    }
];
let WorkoutModalPageRoutingModule = class WorkoutModalPageRoutingModule {
};
WorkoutModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WorkoutModalPageRoutingModule);



/***/ }),

/***/ 29207:
/*!*******************************************************!*\
  !*** ./src/app/workout-modal/workout-modal.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutModalPageModule": () => (/* binding */ WorkoutModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _workout_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workout-modal-routing.module */ 93578);
/* harmony import */ var _workout_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workout-modal.page */ 18248);







let WorkoutModalPageModule = class WorkoutModalPageModule {
};
WorkoutModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _workout_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkoutModalPageRoutingModule
        ],
        declarations: [_workout_modal_page__WEBPACK_IMPORTED_MODULE_1__.WorkoutModalPage]
    })
], WorkoutModalPageModule);



/***/ }),

/***/ 18248:
/*!*****************************************************!*\
  !*** ./src/app/workout-modal/workout-modal.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutModalPage": () => (/* binding */ WorkoutModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_workout_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./workout-modal.page.html */ 41387);
/* harmony import */ var _workout_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workout-modal.page.scss */ 21427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let WorkoutModalPage = class WorkoutModalPage {
    constructor() { }
    ngOnInit() {
    }
};
WorkoutModalPage.ctorParameters = () => [];
WorkoutModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-workout-modal',
        template: _raw_loader_workout_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_workout_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WorkoutModalPage);



/***/ }),

/***/ 21427:
/*!*******************************************************!*\
  !*** ./src/app/workout-modal/workout-modal.page.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3Jrb3V0LW1vZGFsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 41387:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/workout-modal/workout-modal.page.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>workoutModal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_workout-modal_workout-modal_module_ts.js.map