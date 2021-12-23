(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_workout_workout_module_ts"],{

/***/ 7581:
/*!***************************************************!*\
  !*** ./src/app/workout/workout-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutPageRoutingModule": () => (/* binding */ WorkoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _workout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workout.page */ 98385);




const routes = [
    {
        path: '',
        component: _workout_page__WEBPACK_IMPORTED_MODULE_0__.WorkoutPage
    }
];
let WorkoutPageRoutingModule = class WorkoutPageRoutingModule {
};
WorkoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WorkoutPageRoutingModule);



/***/ }),

/***/ 81115:
/*!*******************************************!*\
  !*** ./src/app/workout/workout.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutPageModule": () => (/* binding */ WorkoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _workout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workout-routing.module */ 7581);
/* harmony import */ var _workout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workout.page */ 98385);







let WorkoutPageModule = class WorkoutPageModule {
};
WorkoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _workout_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkoutPageRoutingModule
        ],
        declarations: [_workout_page__WEBPACK_IMPORTED_MODULE_1__.WorkoutPage]
    })
], WorkoutPageModule);



/***/ }),

/***/ 98385:
/*!*****************************************!*\
  !*** ./src/app/workout/workout.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutPage": () => (/* binding */ WorkoutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_workout_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./workout.page.html */ 63197);
/* harmony import */ var _workout_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workout.page.scss */ 6691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _workout_modal_knee_push_up_modal_knee_push_up_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workout-modal/knee-push-up-modal/knee-push-up-modal.page */ 78119);
/* harmony import */ var _lower_body_modal_side_leg_raise_modal_side_leg_raise_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lower-body-modal/side-leg-raise-modal/side-leg-raise-modal.page */ 64113);
/* harmony import */ var _full_body_modal_squat_modal_squat_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../full-body-modal/squat-modal/squat-modal.page */ 84069);
/* harmony import */ var _workout_modal_merlin_chest_expansion_merlin_chest_expansion_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../workout-modal/merlin-chest-expansion/merlin-chest-expansion.page */ 79492);
/* harmony import */ var _lower_body_modal_drac_jump_squat_drac_jump_squat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lower-body-modal/drac-jump-squat/drac-jump-squat.page */ 21726);
/* harmony import */ var _full_body_modal_wide_squat_wide_squat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../full-body-modal/wide-squat/wide-squat.page */ 29193);
/* harmony import */ var _workout_modal_push_up_push_up_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../workout-modal/push-up/push-up.page */ 52986);
/* harmony import */ var _lower_body_modal_bbsquat_bbsquat_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lower-body-modal/bbsquat/bbsquat.page */ 91610);
/* harmony import */ var _full_body_modal_jump_squat_jump_squat_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../full-body-modal/jump-squat/jump-squat.page */ 56328);














let WorkoutPage = class WorkoutPage {
    constructor(mdController) {
        this.mdController = mdController;
        this.selectTabs = 'upper';
    }
    openPieceOfCakeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _lower_body_modal_side_leg_raise_modal_side_leg_raise_modal_page__WEBPACK_IMPORTED_MODULE_3__.SideLegRaiseModalPage,
            });
            return yield modal.present();
        });
    }
    openDracarys() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _lower_body_modal_drac_jump_squat_drac_jump_squat_page__WEBPACK_IMPORTED_MODULE_6__.DracJumpSquatPage,
            });
            return yield modal.present();
        });
    }
    openKneePushModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _workout_modal_knee_push_up_modal_knee_push_up_modal_page__WEBPACK_IMPORTED_MODULE_2__.KneePushUpModalPage,
            });
            return yield modal.present();
        });
    }
    openMerlinModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _workout_modal_merlin_chest_expansion_merlin_chest_expansion_page__WEBPACK_IMPORTED_MODULE_5__.MerlinChestExpansionPage,
            });
            return yield modal.present();
        });
    }
    openSquatModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _full_body_modal_squat_modal_squat_modal_page__WEBPACK_IMPORTED_MODULE_4__.SquatModalPage,
            });
            return yield modal.present();
        });
    }
    openFullBodyWorks() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _full_body_modal_wide_squat_wide_squat_page__WEBPACK_IMPORTED_MODULE_7__.WideSquatPage,
            });
            return yield modal.present();
        });
    }
    openRedReaper() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _workout_modal_push_up_push_up_page__WEBPACK_IMPORTED_MODULE_8__.PushUpPage,
            });
            return yield modal.present();
        });
    }
    openBubbleButt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _lower_body_modal_bbsquat_bbsquat_page__WEBPACK_IMPORTED_MODULE_9__.BBsquatPage,
            });
            return yield modal.present();
        });
    }
    openMasterUniv() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _full_body_modal_jump_squat_jump_squat_page__WEBPACK_IMPORTED_MODULE_10__.JumpSquatPage,
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
    }
};
WorkoutPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController }
];
WorkoutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-workout',
        template: _raw_loader_workout_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_workout_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WorkoutPage);



/***/ }),

/***/ 6691:
/*!*******************************************!*\
  !*** ./src/app/workout/workout.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".segment-label {\n  font-size: 14px;\n}\n\nion-toolbar {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\nimg {\n  padding: 0;\n  margin: 0;\n}\n\nion-card {\n  border-radius: 12px;\n}\n\n.segment-content ion-button {\n  --border-radius: 8px !important;\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0Usd0NBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6IndvcmtvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlZ21lbnQtbGFiZWx7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAtLWlvbi1mb250LWZhbWlseTogJ2Jhcmxvdy1mb250LWxpZ2h0ZXInO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi5zZWdtZW50LWNvbnRlbnQgaW9uLWJ1dHRvbntcclxuICAtLWJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50O1xyXG4gIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 63197:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/workout/workout.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">Exercises</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"personal-information\">\n\n    <ion-segment [(ngModel)]='selectTabs' scrollable=\"true\">\n        <ion-segment-button value=\"upper\">\n          <ion-label class=\"segment-label\">Upper Body</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button value=\"lower\">\n          <ion-label class=\"segment-label\">Lower Body</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button value=\"whole\">\n          <ion-label class=\"segment-label\">Full Body</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n\n    <div class=\"segment-content\" *ngIf=\"selectTabs === 'upper'\">\n      <ion-card>\n        <img src=\"/assets/images/workout/upperbody.png\">\n        <ion-card-header>\n          <ion-card-title>MERLIN</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          The Merlin workout helps you create good upper body coordination, dexterity, tendon and\n          muscle conditioning and great range of motion. Add EC and the challenge escalates. <br>\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-chip color=\"success\">\n                  <ion-label>Easy</ion-label>\n                </ion-chip>\n              </ion-col>\n              <ion-col>\n                <ion-chip color=\"success\">\n                  <ion-label>Level 1</ion-label>\n                </ion-chip>\n              </ion-col>\n              <ion-col>\n                <ion-button color=\"primary\" (click)=\"openMerlinModal()\">Start</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <img src=\"/assets/images/workout/upperbody.png\">\n        <ion-card-header>\n          <ion-card-title>UPPERBODY</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            The upper body exercise will give you the chance to improve muscle tone, strength and muscular control which\n            is a good basis for aiming for the next level in your fitness journey. <br>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <ion-chip color=\"secondary\">\n                    <ion-label>Normal</ion-label>\n                  </ion-chip>\n                </ion-col>\n                <ion-col>\n                  <ion-chip color=\"success\">\n                    <ion-label>Level 1</ion-label>\n                  </ion-chip>\n                </ion-col>\n                <ion-col>\n                  <ion-button color=\"primary\" (click)=\"openKneePushModal()\">Start</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <img src=\"/assets/images/workout/upperbody.png\">\n        <ion-card-header>\n          <ion-card-title>RED REAPER</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          Chisel your upper-body strength and reinforce your core, become harder\n          to kill with the Red Reaper Workout. Keep your body straight, tighten up your abs,\n          take a deep breath - and dive in! <br>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <ion-chip color=\"danger\">\n                    <ion-label>Hard</ion-label>\n                  </ion-chip>\n                </ion-col>\n                <ion-col>\n                  <ion-chip color=\"success\">\n                    <ion-label>Level 1</ion-label>\n                  </ion-chip>\n                </ion-col>\n                <ion-col>\n                  <ion-button color=\"primary\" (click)=\"openRedReaper()\">Start</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n\n    <div class=\"segment-content\" *ngIf=\"selectTabs === 'lower'\">\n      <ion-card>\n        <img src=\"/assets/images/workout/lowerbody.png\">\n        <ion-card-header>\n          <ion-card-title>DRACARYS</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          Dracarys workout is a primarily lower body workout but doesn't neglect the upper\n          body muscles completely. It will leave you feeling refreshed and ready to face the day ahead.  <br>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <ion-chip color=\"success\">\n                    <ion-label>Easy</ion-label>\n                  </ion-chip>\n                </ion-col>\n                <ion-col>\n                  <ion-chip color=\"success\">\n                    <ion-label>Level 1</ion-label>\n                  </ion-chip>\n                </ion-col>\n                <ion-col>\n                  <ion-button color=\"primary\" (click)=\"openDracarys()\">Start</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <img src=\"/assets/images/workout/lowerbody.png\">\n        <ion-card-header>\n          <ion-card-title>PIECE OF CAKE</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            Piece of Cake is that workout you go for when getting back into training after a lay-off, starting out\n            on your fitness journey or coming back from injury and testing the water. <br>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <ion-chip color=\"secondary\">\n                    <ion-label>Normal</ion-label>\n                  </ion-chip>\n                </ion-col>\n                <ion-col>\n                  <ion-chip color=\"success\">\n                    <ion-label>Level 1</ion-label>\n                  </ion-chip>\n                </ion-col>\n                <ion-col>\n                  <ion-button color=\"primary\" (click)=\"openPieceOfCakeModal()\">Start</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <img src=\"/assets/images/workout/bubble-buttt.JPG\">\n        <ion-card-header>\n          <ion-card-title>BUBBLE BUTT</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          Bubble Butt is a workout that delivers on all these promises on Glutes. A difficulty Level IV\n          workout this is not suitable for beginners but it should definitely be on your workout horizon. <br>\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <ion-chip color=\"danger\">\n                    <ion-label>Hard</ion-label>\n                  </ion-chip>\n                </ion-col>\n                <ion-col>\n                  <ion-chip color=\"danger\">\n                    <ion-label>Level 4</ion-label>\n                  </ion-chip>\n                </ion-col>\n                <ion-col>\n                  <ion-button color=\"primary\" (click)=\"openBubbleButt()\">Start</ion-button>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <div class=\"segment-content\" *ngIf=\"selectTabs === 'whole'\">\n      <ion-card>\n        <img src=\"/assets/images/workout/wholebody.png\">\n        <ion-card-header>\n          <ion-card-title>FULL BODY WORKS</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          Nothing quite works the entire body as this quick workout does.\n          It pushes all the right buttons, activates all the right muscles, has all the right\n          effects in the end and it can still be done in under less time you take for a coffee break.<br>\n           <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-chip color=\"success\">\n                  <ion-label>Easy</ion-label>\n                </ion-chip>\n              </ion-col>\n              <ion-col>\n                <ion-chip color=\"success\">\n                  <ion-label>Level 1</ion-label>\n                </ion-chip>\n              </ion-col>\n              <ion-col>\n                <ion-button color=\"primary\" (click)=\"openFullBodyWorks()\">Start</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <img src=\"/assets/images/workout/wholebody.png\">\n        <ion-card-header>\n          <ion-card-title>3PM WORKOUT</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n           The 3PM Workout targets all the major muscle groups of the body to\n           produce a set of exercises that will make you stronger, sweatier and healthier<br>\n           <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-chip color=\"secondary\">\n                  <ion-label>Normal</ion-label>\n                </ion-chip>\n              </ion-col>\n              <ion-col>\n                <ion-chip color=\"success\">\n                  <ion-label>Level 1</ion-label>\n                </ion-chip>\n              </ion-col>\n              <ion-col>\n                <ion-button color=\"primary\" (click)=\"openSquatModal()\">Start</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <img src=\"/assets/images/workout/master.JPG\">\n        <ion-card-header>\n          <ion-card-title>MASTER OF THE UNIVERSE</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          Master Of The Universe can't be anything else than a difficulty Level IV workout.\n          This means that your body will feel the added load from the very first set but you are\n          also more likely to see faster changes take place and feel the transformation. <br>\n           <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-chip color=\"danger\">\n                  <ion-label>Hard</ion-label>\n                </ion-chip>\n              </ion-col>\n              <ion-col>\n                <ion-chip color=\"success\">\n                  <ion-label>Level 1</ion-label>\n                </ion-chip>\n              </ion-col>\n              <ion-col>\n                <ion-button color=\"primary\" (click)=\"openMasterUniv()\">Start</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n     </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_workout_workout_module_ts.js.map