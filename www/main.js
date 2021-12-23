(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 70809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guard/auth.guard */ 97209);




const routes = [
    {
        path: '',
        redirectTo: 'slide',
        pathMatch: 'full'
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 86432)).then((m) => m.TabsPageModule),
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_services_data_service_ts"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 77641)).then(m => m.LoginPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_services_data_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./signup/signup.module */ 56650)).then(m => m.SignupPageModule)
    },
    {
        path: 'workout',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_workout_workout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./workout/workout.module */ 81115)).then(m => m.WorkoutPageModule)
    },
    {
        path: 'diet',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_diet_diet_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./diet/diet.module */ 27704)).then(m => m.DietPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_notification_notification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./notification/notification.module */ 92101)).then(m => m.NotificationPageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_services_data_service_ts"), __webpack_require__.e("default-src_app_old-pass-entry_old-pass-entry_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 82711)).then(m => m.HomePageModule)
    },
    {
        path: 'modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modal/modal.module */ 75813)).then(m => m.ModalPageModule)
    },
    {
        path: 'avocado-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modal/avocado-modal/avocado-modal.module */ 95992)).then(m => m.AvocadoModalPageModule)
    },
    {
        path: 'mango-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modal/mango-modal/mango-modal.module */ 36521)).then(m => m.MangoModalPageModule)
    },
    {
        path: 'fruits-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_fruits-modal_fruits-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fruits-modal/fruits-modal.module */ 74249)).then(m => m.FruitsModalPageModule)
    },
    {
        path: 'deactivate-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_services_data_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_deactivate-modal_deactivate-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./deactivate-modal/deactivate-modal.module */ 26116)).then(m => m.DeactivateModalPageModule)
    },
    {
        path: 'workout-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_workout-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/workout-modal.module */ 29207)).then(m => m.WorkoutModalPageModule)
    },
    {
        path: 'arm-extenstion-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_arm-extenstion-modal_arm-extenstion-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/arm-extenstion-modal/arm-extenstion-modal.module */ 38530)).then(m => m.ArmExtenstionModalPageModule)
    },
    {
        path: 'knee-push-up-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_workout-modal_knee-push-up-modal_knee-push-up-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/knee-push-up-modal/knee-push-up-modal.module */ 11602)).then(m => m.KneePushUpModalPageModule)
    },
    {
        path: 'bicep-extenstion-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_bicep-extenstion-modal_bicep-extenstion-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/bicep-extenstion-modal/bicep-extenstion-modal.module */ 83320)).then(m => m.BicepExtenstionModalPageModule)
    },
    {
        path: 'second-knee-push-up-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_second-knee-push-up-modal_second-knee-push-up-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/second-knee-push-up-modal/second-knee-push-up-modal.module */ 84163)).then(m => m.SecondKneePushUpModalPageModule)
    },
    {
        path: 'third-knee-push-up-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_third-knee-push-up-modal_third-knee-push-up-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/third-knee-push-up-modal/third-knee-push-up-modal.module */ 20648)).then(m => m.ThirdKneePushUpModalPageModule)
    },
    {
        path: 'arm-scissor-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_arm-scissor-modal_arm-scissor-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/arm-scissor-modal/arm-scissor-modal.module */ 96362)).then(m => m.ArmScissorModalPageModule)
    },
    {
        path: 'scissor-chop-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_scissor-chop-modal_scissor-chop-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/scissor-chop-modal/scissor-chop-modal.module */ 60452)).then(m => m.ScissorChopModalPageModule)
    },
    {
        path: 'shoulder-tap-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_shoulder-tap-modal_shoulder-tap-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/shoulder-tap-modal/shoulder-tap-modal.module */ 10826)).then(m => m.ShoulderTapModalPageModule)
    },
    {
        path: 'side-shoulder-tap-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_side-shoulder-tap-modal_side-shoulder-tap-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/side-shoulder-tap-modal/side-shoulder-tap-modal.module */ 92849)).then(m => m.SideShoulderTapModalPageModule)
    },
    {
        path: 'lower-body-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_lower-body-modal_lower-body-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lower-body-modal/lower-body-modal.module */ 6156)).then(m => m.LowerBodyModalPageModule)
    },
    {
        path: 'flutter-kicks-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_lower-body-modal_flutter-kicks-modal_flutter-kicks-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lower-body-modal/flutter-kicks-modal/flutter-kicks-modal.module */ 38632)).then(m => m.FlutterKicksModalPageModule)
    },
    {
        path: 'bridges-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_lower-body-modal_bridges-modal_bridges-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lower-body-modal/bridges-modal/bridges-modal.module */ 89369)).then(m => m.BridgesModalPageModule)
    },
    {
        path: 'second-flutter-kicks-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_lower-body-modal_second-flutter-kicks-modal_second-flutter-kicks-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lower-body-modal/second-flutter-kicks-modal/second-flutter-kicks-modal.module */ 4793)).then(m => m.SecondFlutterKicksModalPageModule)
    },
    {
        path: 'knee-roll-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_lower-body-modal_knee-roll-modal_knee-roll-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lower-body-modal/knee-roll-modal/knee-roll-modal.module */ 11090)).then(m => m.KneeRollModalPageModule)
    },
    {
        path: 'third-flutter-kicksl-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_lower-body-modal_third-flutter-kicksl-modal_third-flutter-kicksl-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lower-body-modal/third-flutter-kicksl-modal/third-flutter-kicksl-modal.module */ 67316)).then(m => m.ThirdFlutterKickslModalPageModule)
    },
    {
        path: 'full-body-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_full-body-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./full-body-modal/full-body-modal.module */ 65788)).then(m => m.FullBodyModalPageModule)
    },
    {
        path: 'squat-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_full-body-modal_squat-modal_squat-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./full-body-modal/squat-modal/squat-modal.module */ 30486)).then(m => m.SquatModalPageModule)
    },
    {
        path: 'push-up-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_push-up-modal_push-up-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./full-body-modal/push-up-modal/push-up-modal.module */ 71849)).then(m => m.PushUpModalPageModule)
    },
    {
        path: 'basic-burpees-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_basic-burpees-modal_basic-burpees-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./full-body-modal/basic-burpees-modal/basic-burpees-modal.module */ 87587)).then(m => m.BasicBurpeesModalPageModule)
    },
    {
        path: 'reverse-angels-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_reverse-angels-modal_reverse-angels-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./full-body-modal/reverse-angels-modal/reverse-angels-modal.module */ 64328)).then(m => m.ReverseAngelsModalPageModule)
    },
    {
        path: 'elbow-plank-holds-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_elbow-plank-holds-modal_elbow-plank-holds-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./full-body-modal/elbow-plank-holds-modal/elbow-plank-holds-modal.module */ 11594)).then(m => m.ElbowPlankHoldsModalPageModule)
    },
    {
        path: 'merlin-chest-expansion',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_workout-modal_merlin-chest-expansion_merlin-chest-expansion_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/merlin-chest-expansion/merlin-chest-expansion.module */ 83588)).
            then(m => m.MerlinChestExpansionPageModule)
    },
    {
        path: 'merlin-arm-circles',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_merlin-arm-circles_merlin-arm-circles_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/merlin-arm-circles/merlin-arm-circles.module */ 99310)).then(m => m.MerlinArmCirclesPageModule)
    },
    {
        path: 'merlin-arm-scissor',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_merlin-arm-scissor_merlin-arm-scissor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/merlin-arm-scissor/merlin-arm-scissor.module */ 62682)).then(m => m.MerlinArmScissorPageModule)
    },
    {
        path: 'merlin-scissor-chops',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_merlin-scissor-chops_merlin-scissor-chops_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/merlin-scissor-chops/merlin-scissor-chops.module */ 67005)).
            then(m => m.MerlinScissorChopsPageModule)
    },
    {
        path: 'drac-calf-raise',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_lower-body-modal_drac-calf-raise_drac-calf-raise_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lower-body-modal/drac-calf-raise/drac-calf-raise.module */ 17512)).
            then(m => m.DracCalfRaisePageModule)
    },
    {
        path: 'drac-second-calf-raise',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_lower-body-modal_drac-second-calf-raise_drac-second-calf-raise_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lower-body-modal/drac-second-calf-raise/drac-second-calf-raise.module */ 88246)).
            then(m => m.DracSecondCalfRaisePageModule)
    },
    {
        path: 'drac-third-calf-raise',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_lower-body-modal_drac-third-calf-raise_drac-third-calf-raise_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lower-body-modal/drac-third-calf-raise/drac-third-calf-raise.module */ 63666)).
            then(m => m.DracThirdCalfRaisePageModule)
    },
    {
        path: 'drac-jump-squat',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_lower-body-modal_drac-jump-squat_drac-jump-squat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./lower-body-modal/drac-jump-squat/drac-jump-squat.module */ 13025)).
            then(m => m.DracJumpSquatPageModule)
    },
    {
        path: 'drac-squat-hold-punches',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_lower-body-modal_drac-squat-hold-punches_drac-squat-hold-punches_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lower-body-modal/drac-squat-hold-punches/drac-squat-hold-punches.module */ 74399)).
            then(m => m.DracSquatHoldPunchesPageModule)
    },
    {
        path: 'drac-second-jump-squat',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_lower-body-modal_drac-second-jump-squat_drac-second-jump-squat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lower-body-modal/drac-second-jump-squat/drac-second-jump-squat.module */ 29150)).
            then(m => m.DracSecondJumpSquatPageModule)
    },
    {
        path: 'wide-squat',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_full-body-modal_wide-squat_wide-squat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./full-body-modal/wide-squat/wide-squat.module */ 68327)).
            then(m => m.WideSquatPageModule)
    },
    {
        path: 'wide-squat-side-bend',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_wide-squat-side-bend_wide-squat-side-bend_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./full-body-modal/wide-squat-side-bend/wide-squat-side-bend.module */ 96030)).
            then(m => m.WideSquatSideBendPageModule)
    },
    {
        path: 'wide-squat-calf-raise',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_wide-squat-calf-raise_wide-squat-calf-raise_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./full-body-modal/wide-squat-calf-raise/wide-squat-calf-raise.module */ 71045)).
            then(m => m.WideSquatCalfRaisePageModule)
    },
    {
        path: 'wide-squat-punches',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_wide-squat-punches_wide-squat-punches_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./full-body-modal/wide-squat-punches/wide-squat-punches.module */ 17667)).
            then(m => m.WideSquatPunchesPageModule)
    },
    {
        path: 'push-up',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_workout-modal_push-up_push-up_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/push-up/push-up.module */ 31237)).
            then(m => m.PushUpPageModule)
    },
    {
        path: 'shoulder-tap',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_shoulder-tap_shoulder-tap_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/shoulder-tap/shoulder-tap.module */ 91410)).
            then(m => m.ShoulderTapPageModule)
    },
    {
        path: 'second-push-up',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_second-push-up_second-push-up_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/second-push-up/second-push-up.module */ 37794)).
            then(m => m.SecondPushUpPageModule)
    },
    {
        path: 'plank-hold',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_plank-hold_plank-hold_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/plank-hold/plank-hold.module */ 92456)).
            then(m => m.PlankHoldPageModule)
    },
    {
        path: 'plank-side-crunches',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_plank-side-crunches_plank-side-crunches_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/plank-side-crunches/plank-side-crunches.module */ 95665)).
            then(m => m.PlankSideCrunchesPageModule)
    },
    {
        path: 'second-plank-hold',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_workout-modal_second-plank-hold_second-plank-hold_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./workout-modal/second-plank-hold/second-plank-hold.module */ 57521)).
            then(m => m.SecondPlankHoldPageModule)
    },
    {
        path: 'bblunge-step-ups',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_lower-body-modal_bblunge-step-ups_bblunge-step-ups_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lower-body-modal/bblunge-step-ups/bblunge-step-ups.module */ 26021)).
            then(m => m.BBlungeStepUpsPageModule)
    },
    {
        path: 'bbplank-back',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_lower-body-modal_bbplank-back_bbplank-back_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lower-body-modal/bbplank-back/bbplank-back.module */ 760)).
            then(m => m.BBplankBackPageModule)
    },
    {
        path: 'bbsingle-leg-bridges',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_lower-body-modal_bbsingle-leg-bridges_bbsingle-leg-bridges_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./lower-body-modal/bbsingle-leg-bridges/bbsingle-leg-bridges.module */ 89632)).
            then(m => m.BBsingleLegBridgesPageModule)
    },
    {
        path: 'bbsquat',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_lower-body-modal_bbsquat_bbsquat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./lower-body-modal/bbsquat/bbsquat.module */ 23198)).
            then(m => m.BBsquatPageModule)
    },
    {
        path: 'jump-squat',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_full-body-modal_jump-squat_jump-squat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./full-body-modal/jump-squat/jump-squat.module */ 4775)).
            then(m => m.JumpSquatPageModule)
    },
    {
        path: 'push-up-shoulder-taps',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_push-up-shoulder-taps_push-up-shoulder-taps_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./full-body-modal/push-up-shoulder-taps/push-up-shoulder-taps.module */ 75782)).
            then(m => m.PushUpShoulderTapsPageModule)
    },
    {
        path: 'side-plank-rotations',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_side-plank-rotations_side-plank-rotations_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./full-body-modal/side-plank-rotations/side-plank-rotations.module */ 47705)).
            then(m => m.SidePlankRotationsPageModule)
    },
    {
        path: 'jumping-lunges',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_jumping-lunges_jumping-lunges_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./full-body-modal/jumping-lunges/jumping-lunges.module */ 87834)).
            then(m => m.JumpingLungesPageModule)
    },
    {
        path: 'raise-leg-push-ups',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_raise-leg-push-ups_raise-leg-push-ups_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./full-body-modal/raise-leg-push-ups/raise-leg-push-ups.module */ 40856)).
            then(m => m.RaiseLegPushUpsPageModule)
    },
    {
        path: 'side-plank-crunches',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_full-body-modal_side-plank-crunches_side-plank-crunches_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./full-body-modal/side-plank-crunches/side-plank-crunches.module */ 52238)).
            then(m => m.SidePlankCrunchesPageModule)
    },
    {
        path: 'vegies-modal',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_vegies-modal_vegies-modal_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./vegies-modal/vegies-modal.module */ 42942)).then(m => m.VegiesModalPageModule)
    },
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 86432)).then(m => m.TabsPageModule)
    },
    {
        path: 'slide',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_slide_slide_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./slide/slide.module */ 66677)).then(m => m.SlidePageModule)
    },
    {
        path: 'change-password-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_services_data_service_ts"), __webpack_require__.e("src_app_change-password-modal_change-password-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./change-password-modal/change-password-modal.module */ 42383)).then(m => m.ChangePasswordModalPageModule)
    },
    {
        path: 'old-pass-entry',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_services_data_service_ts"), __webpack_require__.e("default-src_app_old-pass-entry_old-pass-entry_page_ts"), __webpack_require__.e("src_app_old-pass-entry_old-pass-entry_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./old-pass-entry/old-pass-entry.module */ 63991)).then(m => m.OldPassEntryPageModule)
    },
    {
        path: 'todoworkout',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_services_data_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_todoworkout_todoworkout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./todoworkout/todoworkout.module */ 20070)).then(m => m.TodoworkoutPageModule)
    },
    {
        path: 'update-todo',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_update-todo_update-todo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./update-todo/update-todo.module */ 21376)).then(m => m.UpdateTodoPageModule)
    },
    {
        path: 'add-workout',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_sweetalert2_dist_sweetalert2_all_js-src_app_services_data_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_add-workout_add-workout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./add-workout/add-workout.module */ 70485)).then(m => m.AddWorkoutPageModule)
    },
    {
        path: 'terms-and-conditions-modal',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_terms-and-conditions-modal_terms-and-conditions-modal_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./terms-and-conditions-modal/terms-and-conditions-modal.module */ 95032)).then(m => m.TermsAndConditionsModalPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 20721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 50023:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 93220);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 31887);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 20721);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 70809);
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/modal.module */ 75813);
/* harmony import */ var _modal_avocado_modal_avocado_modal_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/avocado-modal/avocado-modal.module */ 95992);
/* harmony import */ var _modal_mango_modal_mango_modal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/mango-modal/mango-modal.module */ 36521);
/* harmony import */ var _fruits_modal_papaya_modal_papaya_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fruits-modal/papaya-modal/papaya-modal.module */ 70490);
/* harmony import */ var _fruits_modal_peaches_modal_peaches_modal_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fruits-modal/peaches-modal/peaches-modal.module */ 1320);
/* harmony import */ var _fruits_modal_strawberries_modal_strawberries_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fruits-modal/strawberries-modal/strawberries-modal.module */ 27201);
/* harmony import */ var _fruits_modal_pineapple_modal_pineapple_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fruits-modal/pineapple-modal/pineapple-modal.module */ 83839);
/* harmony import */ var _fruits_modal_blueberries_modal_blueberries_modal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fruits-modal/blueberries-modal/blueberries-modal.module */ 48308);

















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule.forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _modal_modal_module__WEBPACK_IMPORTED_MODULE_2__.ModalPageModule,
            _modal_avocado_modal_avocado_modal_module__WEBPACK_IMPORTED_MODULE_3__.AvocadoModalPageModule, _modal_mango_modal_mango_modal_module__WEBPACK_IMPORTED_MODULE_4__.MangoModalPageModule, _fruits_modal_blueberries_modal_blueberries_modal_module__WEBPACK_IMPORTED_MODULE_9__.BlueberriesModalPageModule, _fruits_modal_papaya_modal_papaya_modal_module__WEBPACK_IMPORTED_MODULE_5__.PapayaModalPageModule, _fruits_modal_peaches_modal_peaches_modal_module__WEBPACK_IMPORTED_MODULE_6__.PeachesModalPageModule,
            _fruits_modal_strawberries_modal_strawberries_modal_module__WEBPACK_IMPORTED_MODULE_7__.StrawberriesModalPageModule, _fruits_modal_pineapple_modal_pineapple_modal_module__WEBPACK_IMPORTED_MODULE_8__.PineappleModalPageModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 67027:
/*!************************************************************************************!*\
  !*** ./src/app/fruits-modal/blueberries-modal/blueberries-modal-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlueberriesModalPageRoutingModule": () => (/* binding */ BlueberriesModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _blueberries_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blueberries-modal.page */ 1975);




const routes = [
    {
        path: '',
        component: _blueberries_modal_page__WEBPACK_IMPORTED_MODULE_0__.BlueberriesModalPage
    }
];
let BlueberriesModalPageRoutingModule = class BlueberriesModalPageRoutingModule {
};
BlueberriesModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BlueberriesModalPageRoutingModule);



/***/ }),

/***/ 48308:
/*!****************************************************************************!*\
  !*** ./src/app/fruits-modal/blueberries-modal/blueberries-modal.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlueberriesModalPageModule": () => (/* binding */ BlueberriesModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _blueberries_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blueberries-modal-routing.module */ 67027);
/* harmony import */ var _blueberries_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blueberries-modal.page */ 1975);







let BlueberriesModalPageModule = class BlueberriesModalPageModule {
};
BlueberriesModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _blueberries_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlueberriesModalPageRoutingModule
        ],
        declarations: [_blueberries_modal_page__WEBPACK_IMPORTED_MODULE_1__.BlueberriesModalPage]
    })
], BlueberriesModalPageModule);



/***/ }),

/***/ 1975:
/*!**************************************************************************!*\
  !*** ./src/app/fruits-modal/blueberries-modal/blueberries-modal.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlueberriesModalPage": () => (/* binding */ BlueberriesModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_blueberries_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./blueberries-modal.page.html */ 40969);
/* harmony import */ var _blueberries_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blueberries-modal.page.scss */ 24360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);






let BlueberriesModalPage = class BlueberriesModalPage {
    constructor(mdController, router) {
        this.mdController = mdController;
        this.router = router;
    }
    ngOnInit() {
    }
    closeModal() {
        this.mdController.dismiss();
        this.router.navigate(['/tabs/diet']);
    }
};
BlueberriesModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
BlueberriesModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-blueberries-modal',
        template: _raw_loader_blueberries_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_blueberries_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BlueberriesModalPage);



/***/ }),

/***/ 8037:
/*!**************************************************************************!*\
  !*** ./src/app/fruits-modal/papaya-modal/papaya-modal-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PapayaModalPageRoutingModule": () => (/* binding */ PapayaModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _papaya_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./papaya-modal.page */ 28139);




const routes = [
    {
        path: '',
        component: _papaya_modal_page__WEBPACK_IMPORTED_MODULE_0__.PapayaModalPage
    }
];
let PapayaModalPageRoutingModule = class PapayaModalPageRoutingModule {
};
PapayaModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PapayaModalPageRoutingModule);



/***/ }),

/***/ 70490:
/*!******************************************************************!*\
  !*** ./src/app/fruits-modal/papaya-modal/papaya-modal.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PapayaModalPageModule": () => (/* binding */ PapayaModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _papaya_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./papaya-modal-routing.module */ 8037);
/* harmony import */ var _papaya_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./papaya-modal.page */ 28139);







let PapayaModalPageModule = class PapayaModalPageModule {
};
PapayaModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _papaya_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PapayaModalPageRoutingModule
        ],
        declarations: [_papaya_modal_page__WEBPACK_IMPORTED_MODULE_1__.PapayaModalPage]
    })
], PapayaModalPageModule);



/***/ }),

/***/ 28139:
/*!****************************************************************!*\
  !*** ./src/app/fruits-modal/papaya-modal/papaya-modal.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PapayaModalPage": () => (/* binding */ PapayaModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_papaya_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./papaya-modal.page.html */ 25887);
/* harmony import */ var _papaya_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./papaya-modal.page.scss */ 90603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);






let PapayaModalPage = class PapayaModalPage {
    constructor(mdController, router) {
        this.mdController = mdController;
        this.router = router;
    }
    ngOnInit() {
    }
    closeModal() {
        this.mdController.dismiss();
        this.router.navigate(['/tabs/diet']);
    }
};
PapayaModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PapayaModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-papaya-modal',
        template: _raw_loader_papaya_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_papaya_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PapayaModalPage);



/***/ }),

/***/ 85460:
/*!****************************************************************************!*\
  !*** ./src/app/fruits-modal/peaches-modal/peaches-modal-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeachesModalPageRoutingModule": () => (/* binding */ PeachesModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _peaches_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./peaches-modal.page */ 40393);




const routes = [
    {
        path: '',
        component: _peaches_modal_page__WEBPACK_IMPORTED_MODULE_0__.PeachesModalPage
    }
];
let PeachesModalPageRoutingModule = class PeachesModalPageRoutingModule {
};
PeachesModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PeachesModalPageRoutingModule);



/***/ }),

/***/ 1320:
/*!********************************************************************!*\
  !*** ./src/app/fruits-modal/peaches-modal/peaches-modal.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeachesModalPageModule": () => (/* binding */ PeachesModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _peaches_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./peaches-modal-routing.module */ 85460);
/* harmony import */ var _peaches_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./peaches-modal.page */ 40393);







let PeachesModalPageModule = class PeachesModalPageModule {
};
PeachesModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _peaches_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PeachesModalPageRoutingModule
        ],
        declarations: [_peaches_modal_page__WEBPACK_IMPORTED_MODULE_1__.PeachesModalPage]
    })
], PeachesModalPageModule);



/***/ }),

/***/ 40393:
/*!******************************************************************!*\
  !*** ./src/app/fruits-modal/peaches-modal/peaches-modal.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeachesModalPage": () => (/* binding */ PeachesModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_peaches_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./peaches-modal.page.html */ 71656);
/* harmony import */ var _peaches_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./peaches-modal.page.scss */ 69615);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);






let PeachesModalPage = class PeachesModalPage {
    constructor(mdController, router) {
        this.mdController = mdController;
        this.router = router;
    }
    ngOnInit() {
    }
    closeModal() {
        this.mdController.dismiss();
        this.router.navigate(['/tabs/diet']);
    }
};
PeachesModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PeachesModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-peaches-modal',
        template: _raw_loader_peaches_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_peaches_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PeachesModalPage);



/***/ }),

/***/ 8376:
/*!********************************************************************************!*\
  !*** ./src/app/fruits-modal/pineapple-modal/pineapple-modal-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PineappleModalPageRoutingModule": () => (/* binding */ PineappleModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _pineapple_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pineapple-modal.page */ 99609);




const routes = [
    {
        path: '',
        component: _pineapple_modal_page__WEBPACK_IMPORTED_MODULE_0__.PineappleModalPage
    }
];
let PineappleModalPageRoutingModule = class PineappleModalPageRoutingModule {
};
PineappleModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PineappleModalPageRoutingModule);



/***/ }),

/***/ 83839:
/*!************************************************************************!*\
  !*** ./src/app/fruits-modal/pineapple-modal/pineapple-modal.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PineappleModalPageModule": () => (/* binding */ PineappleModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _pineapple_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pineapple-modal-routing.module */ 8376);
/* harmony import */ var _pineapple_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pineapple-modal.page */ 99609);







let PineappleModalPageModule = class PineappleModalPageModule {
};
PineappleModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pineapple_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PineappleModalPageRoutingModule
        ],
        declarations: [_pineapple_modal_page__WEBPACK_IMPORTED_MODULE_1__.PineappleModalPage]
    })
], PineappleModalPageModule);



/***/ }),

/***/ 99609:
/*!**********************************************************************!*\
  !*** ./src/app/fruits-modal/pineapple-modal/pineapple-modal.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PineappleModalPage": () => (/* binding */ PineappleModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_pineapple_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pineapple-modal.page.html */ 56493);
/* harmony import */ var _pineapple_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pineapple-modal.page.scss */ 73844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);






let PineappleModalPage = class PineappleModalPage {
    constructor(mdController, router) {
        this.mdController = mdController;
        this.router = router;
    }
    ngOnInit() {
    }
    closeModal() {
        this.mdController.dismiss();
        this.router.navigate(['/tabs/diet']);
    }
};
PineappleModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PineappleModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-pineapple-modal',
        template: _raw_loader_pineapple_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pineapple_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PineappleModalPage);



/***/ }),

/***/ 25253:
/*!**************************************************************************************!*\
  !*** ./src/app/fruits-modal/strawberries-modal/strawberries-modal-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrawberriesModalPageRoutingModule": () => (/* binding */ StrawberriesModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _strawberries_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strawberries-modal.page */ 38170);




const routes = [
    {
        path: '',
        component: _strawberries_modal_page__WEBPACK_IMPORTED_MODULE_0__.StrawberriesModalPage
    }
];
let StrawberriesModalPageRoutingModule = class StrawberriesModalPageRoutingModule {
};
StrawberriesModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StrawberriesModalPageRoutingModule);



/***/ }),

/***/ 27201:
/*!******************************************************************************!*\
  !*** ./src/app/fruits-modal/strawberries-modal/strawberries-modal.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrawberriesModalPageModule": () => (/* binding */ StrawberriesModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _strawberries_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strawberries-modal-routing.module */ 25253);
/* harmony import */ var _strawberries_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strawberries-modal.page */ 38170);







let StrawberriesModalPageModule = class StrawberriesModalPageModule {
};
StrawberriesModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _strawberries_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.StrawberriesModalPageRoutingModule
        ],
        declarations: [_strawberries_modal_page__WEBPACK_IMPORTED_MODULE_1__.StrawberriesModalPage]
    })
], StrawberriesModalPageModule);



/***/ }),

/***/ 38170:
/*!****************************************************************************!*\
  !*** ./src/app/fruits-modal/strawberries-modal/strawberries-modal.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrawberriesModalPage": () => (/* binding */ StrawberriesModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_strawberries_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./strawberries-modal.page.html */ 64441);
/* harmony import */ var _strawberries_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strawberries-modal.page.scss */ 49530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);






let StrawberriesModalPage = class StrawberriesModalPage {
    constructor(mdController, router) {
        this.mdController = mdController;
        this.router = router;
    }
    ngOnInit() {
    }
    closeModal() {
        this.mdController.dismiss();
        this.router.navigate(['/tabs/diet']);
    }
};
StrawberriesModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
StrawberriesModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-strawberries-modal',
        template: _raw_loader_strawberries_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_strawberries_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StrawberriesModalPage);



/***/ }),

/***/ 97209:
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user.service */ 11000);




let AuthGuard = class AuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.userService.isLoggedIn()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], AuthGuard);



/***/ }),

/***/ 33481:
/*!*********************************************************************!*\
  !*** ./src/app/modal/avocado-modal/avocado-modal-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvocadoModalPageRoutingModule": () => (/* binding */ AvocadoModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _avocado_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avocado-modal.page */ 69401);




const routes = [
    {
        path: '',
        component: _avocado_modal_page__WEBPACK_IMPORTED_MODULE_0__.AvocadoModalPage
    }
];
let AvocadoModalPageRoutingModule = class AvocadoModalPageRoutingModule {
};
AvocadoModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AvocadoModalPageRoutingModule);



/***/ }),

/***/ 95992:
/*!*************************************************************!*\
  !*** ./src/app/modal/avocado-modal/avocado-modal.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvocadoModalPageModule": () => (/* binding */ AvocadoModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _avocado_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avocado-modal-routing.module */ 33481);
/* harmony import */ var _avocado_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avocado-modal.page */ 69401);







let AvocadoModalPageModule = class AvocadoModalPageModule {
};
AvocadoModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _avocado_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.AvocadoModalPageRoutingModule
        ],
        declarations: [_avocado_modal_page__WEBPACK_IMPORTED_MODULE_1__.AvocadoModalPage]
    })
], AvocadoModalPageModule);



/***/ }),

/***/ 69401:
/*!***********************************************************!*\
  !*** ./src/app/modal/avocado-modal/avocado-modal.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvocadoModalPage": () => (/* binding */ AvocadoModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_avocado_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./avocado-modal.page.html */ 1458);
/* harmony import */ var _avocado_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avocado-modal.page.scss */ 7353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);






let AvocadoModalPage = class AvocadoModalPage {
    constructor(mdController, router) {
        this.mdController = mdController;
        this.router = router;
    }
    ngOnInit() {
    }
    closeModal() {
        this.mdController.dismiss();
        this.router.navigate(['/tabs/diet']);
    }
};
AvocadoModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
AvocadoModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-avocado-modal',
        template: _raw_loader_avocado_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_avocado_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AvocadoModalPage);



/***/ }),

/***/ 46275:
/*!*****************************************************************!*\
  !*** ./src/app/modal/mango-modal/mango-modal-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MangoModalPageRoutingModule": () => (/* binding */ MangoModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _mango_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mango-modal.page */ 65513);




const routes = [
    {
        path: '',
        component: _mango_modal_page__WEBPACK_IMPORTED_MODULE_0__.MangoModalPage
    }
];
let MangoModalPageRoutingModule = class MangoModalPageRoutingModule {
};
MangoModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MangoModalPageRoutingModule);



/***/ }),

/***/ 36521:
/*!*********************************************************!*\
  !*** ./src/app/modal/mango-modal/mango-modal.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MangoModalPageModule": () => (/* binding */ MangoModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _mango_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mango-modal-routing.module */ 46275);
/* harmony import */ var _mango_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mango-modal.page */ 65513);







let MangoModalPageModule = class MangoModalPageModule {
};
MangoModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mango_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.MangoModalPageRoutingModule
        ],
        declarations: [_mango_modal_page__WEBPACK_IMPORTED_MODULE_1__.MangoModalPage]
    })
], MangoModalPageModule);



/***/ }),

/***/ 65513:
/*!*******************************************************!*\
  !*** ./src/app/modal/mango-modal/mango-modal.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MangoModalPage": () => (/* binding */ MangoModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_mango_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./mango-modal.page.html */ 97931);
/* harmony import */ var _mango_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mango-modal.page.scss */ 2246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);






let MangoModalPage = class MangoModalPage {
    constructor(mdController, router) {
        this.mdController = mdController;
        this.router = router;
    }
    ngOnInit() {
    }
    closeModal() {
        this.mdController.dismiss();
        this.router.navigate(['/tabs/diet']);
    }
};
MangoModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
MangoModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-mango-modal',
        template: _raw_loader_mango_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_mango_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MangoModalPage);



/***/ }),

/***/ 72817:
/*!***********************************************!*\
  !*** ./src/app/modal/modal-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPageRoutingModule": () => (/* binding */ ModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.page */ 28176);




const routes = [
    {
        path: '',
        component: _modal_page__WEBPACK_IMPORTED_MODULE_0__.ModalPage
    },
    {
        path: 'avocado-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./avocado-modal/avocado-modal.module */ 95992)).then(m => m.AvocadoModalPageModule)
    },
    {
        path: 'mango-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./mango-modal/mango-modal.module */ 36521)).then(m => m.MangoModalPageModule)
    }
];
let ModalPageRoutingModule = class ModalPageRoutingModule {
};
ModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalPageRoutingModule);



/***/ }),

/***/ 75813:
/*!***************************************!*\
  !*** ./src/app/modal/modal.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPageModule": () => (/* binding */ ModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-routing.module */ 72817);
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.page */ 28176);







let ModalPageModule = class ModalPageModule {
};
ModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalPageRoutingModule
        ],
        declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_1__.ModalPage]
    })
], ModalPageModule);



/***/ }),

/***/ 28176:
/*!*************************************!*\
  !*** ./src/app/modal/modal.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPage": () => (/* binding */ ModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal.page.html */ 71084);
/* harmony import */ var _modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.page.scss */ 69096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);






let ModalPage = class ModalPage {
    constructor(mdController, router) {
        this.mdController = mdController;
        this.router = router;
    }
    ngOnInit() {
    }
    closeModal() {
        this.mdController.dismiss();
        this.router.navigate(['/tabs/diet']);
    }
};
ModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-modal',
        template: _raw_loader_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalPage);



/***/ }),

/***/ 11000:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 42741);


let UserService = class UserService {
    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        this.loggedIn = false;
        this.userObj = { userId: '', userFullname: '', userUsername: '', userEmail: '', userBirthdate: '', userPassword: '' };
    }
    setUser(userObj) {
        this.userObj.userId = userObj.account_id;
        this.userObj.userFullname = userObj.fullname;
        this.userObj.userUsername = userObj.username;
        this.userObj.userEmail = userObj.email;
        this.userObj.userBirthdate = userObj.birthdate;
        this.userObj.userPassword = userObj.account_password;
    }
    getUser() {
        return this.userObj;
    }
    clearUser() {
        this.userObj = { userId: '', userFullname: '', userUsername: '', userEmail: '', userBirthdate: '', userPassword: '' };
    }
    isLoggedIn() {
        return this.loggedIn;
    }
    setLoggedIn() {
        this.loggedIn = true;
    }
    setLoggedOut() {
        this.loggedIn = false;
    }
};
UserService.ctorParameters = () => [];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], UserService);



/***/ }),

/***/ 24766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 90476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50023);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 24766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		95261,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		26,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		29009,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		27221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		34694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		70993,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		63645,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		62245,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		23482,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		4081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		53315,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		64133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		37542,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		21459,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		47618,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		90101,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		82210,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		47370,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		23652,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		28220,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		25500,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		84913,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		15078,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		14857,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		48958,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		14383,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		97630,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		81297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		35492,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		13752,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7487,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		61778,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		82904,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		81609,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		31218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		67021,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		4127,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		28400,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		14397,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		43391,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		66793,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		11695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		4180,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 24360:
/*!****************************************************************************!*\
  !*** ./src/app/fruits-modal/blueberries-modal/blueberries-modal.page.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n}\n\nion-card {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n\nion-card-subtitle {\n  font-size: 16px;\n}\n\nion-card-content {\n  text-align: justify;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsdWViZXJyaWVzLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUdFO0VBQ0UsZUFBQTtBQUFKOztBQUlBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0MsbUJBQUE7RUFDQSxlQUFBO0FBREQiLCJmaWxlIjoiYmx1ZWJlcnJpZXMtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gIC0taW9uLWZvbnQtZmFtaWx5OiAnYmFybG93LWZvbnQtbGlnaHRlcic7XHJcbn1cclxuXHJcbmF7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICBpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXN1YnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudHtcclxuIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 90603:
/*!******************************************************************!*\
  !*** ./src/app/fruits-modal/papaya-modal/papaya-modal.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n}\n\nion-card {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n\nion-card-subtitle {\n  font-size: 16px;\n}\n\nion-card-content {\n  text-align: justify;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcGF5YS1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtBQUNGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFJRTtFQUNFLGVBQUE7QUFESjs7QUFLQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7QUFGRjs7QUFLQTtFQUNDLG1CQUFBO0VBQ0EsZUFBQTtBQUZEIiwiZmlsZSI6InBhcGF5YS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XHJcbiAgLS1pb24tZm9udC1mYW1pbHk6ICdiYXJsb3ctZm9udC1saWdodGVyJztcclxufVxyXG5cclxuXHJcbmF7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICBpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXN1YnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudHtcclxuIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 69615:
/*!********************************************************************!*\
  !*** ./src/app/fruits-modal/peaches-modal/peaches-modal.page.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n}\n\nion-card {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n\nion-card-subtitle {\n  font-size: 16px;\n}\n\nion-card-content {\n  text-align: justify;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlYWNoZXMtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7QUFDRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBSUU7RUFDRSxlQUFBO0FBREo7O0FBS0E7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0FBRkY7O0FBS0E7RUFDQyxtQkFBQTtFQUNBLGVBQUE7QUFGRCIsImZpbGUiOiJwZWFjaGVzLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAtLWlvbi1mb250LWZhbWlseTogJ2Jhcmxvdy1mb250LWxpZ2h0ZXInO1xyXG59XHJcblxyXG5cclxuYXtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcclxufVxyXG5cclxuaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50e1xyXG4gdGV4dC1hbGlnbjoganVzdGlmeTtcclxuIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 73844:
/*!************************************************************************!*\
  !*** ./src/app/fruits-modal/pineapple-modal/pineapple-modal.page.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n}\n\nion-card {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n\nion-card-subtitle {\n  font-size: 16px;\n}\n\nion-card-content {\n  text-align: justify;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbmVhcHBsZS1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtBQUNGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFJRTtFQUNFLGVBQUE7QUFESjs7QUFLQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7QUFGRjs7QUFLQTtFQUNDLG1CQUFBO0VBQ0EsZUFBQTtBQUZEIiwiZmlsZSI6InBpbmVhcHBsZS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XHJcbiAgLS1pb24tZm9udC1mYW1pbHk6ICdiYXJsb3ctZm9udC1saWdodGVyJztcclxufVxyXG5cclxuXHJcbmF7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICBpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXN1YnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudHtcclxuIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 49530:
/*!******************************************************************************!*\
  !*** ./src/app/fruits-modal/strawberries-modal/strawberries-modal.page.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n}\n\nion-card {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n\nion-card-subtitle {\n  font-size: 16px;\n}\n\nion-card-content {\n  text-align: justify;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmF3YmVycmllcy1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFJQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNDLG1CQUFBO0VBQ0EsZUFBQTtBQUREIiwiZmlsZSI6InN0cmF3YmVycmllcy1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XHJcbiAgLS1pb24tZm9udC1mYW1pbHk6ICdiYXJsb3ctZm9udC1saWdodGVyJztcclxufVxyXG5cclxuYXtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjVweDtcclxufVxyXG5cclxuaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50e1xyXG4gdGV4dC1hbGlnbjoganVzdGlmeTtcclxuIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 7353:
/*!*************************************************************!*\
  !*** ./src/app/modal/avocado-modal/avocado-modal.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n  color: #716659;\n}\n\nion-card {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n\nion-card-subtitle {\n  font-size: 16px;\n}\n\nion-card-content {\n  text-align: justify;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2b2NhZG8tbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUlBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0MsbUJBQUE7RUFDQSxlQUFBO0FBREQiLCJmaWxlIjoiYXZvY2Fkby1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XHJcbiAgLS1pb24tZm9udC1mYW1pbHk6ICdiYXJsb3ctZm9udC1saWdodGVyJztcclxufVxyXG5cclxuYXtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICM3MTY2NTk7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnR7XHJcbiB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 2246:
/*!*********************************************************!*\
  !*** ./src/app/modal/mango-modal/mango-modal.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n}\n\nion-card {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n\nion-card-subtitle {\n  font-size: 16px;\n}\n\nion-card-content {\n  text-align: justify;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmdvLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0FBQ0Y7O0FBR0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUlFO0VBQ0UsZUFBQTtBQURKOztBQUtBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtBQUZGOztBQUtBO0VBQ0MsbUJBQUE7RUFDQSxlQUFBO0FBRkQiLCJmaWxlIjoibWFuZ28tbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gIC0taW9uLWZvbnQtZmFtaWx5OiAnYmFybG93LWZvbnQtbGlnaHRlcic7XHJcbn1cclxuXHJcblxyXG5he1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnR7XHJcbiB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 69096:
/*!***************************************!*\
  !*** ./src/app/modal/modal.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n  color: #716659;\n}\n\nion-card {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n}\n\nion-card-subtitle {\n  font-size: 16px;\n}\n\nion-card-content {\n  text-align: justify;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFBSjs7QUFJQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNDLG1CQUFBO0VBQ0EsZUFBQTtBQUREIiwiZmlsZSI6Im1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAtLWlvbi1mb250LWZhbWlseTogJ2Jhcmxvdy1mb250LWxpZ2h0ZXInO1xyXG59XHJcblxyXG5he1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzcxNjY1OTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXN1YnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudHtcclxuIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet>\n  </ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 40969:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fruits-modal/blueberries-modal/blueberries-modal.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/tabs/diet\" (click)=\"closeModal()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Fruit Blueberries</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"/assets/images/diet/spilled-blueberries.jpg\">\n    <ion-card-content>\n      <strong>Nutrition:</strong> (1 cup) 84 calories, 15g sugar, 4g fiber.<br><br>\n        Blueberries are best known in health circles for anthocyanins, the phytonutrients\n        that give them their blue-red tint and their dense antioxidant punch. That punch\n        translates into serious brain food, as blueberries have been found in studies to protect\n        our noggins against both oxidative stress and the effects of age-related mental decay\n        manifested in Alzheimer's and dementia.\n      </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 25887:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fruits-modal/papaya-modal/papaya-modal.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/tabs/diet\" (click)=\"closeModal()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Fruit Papaya</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"/assets/images/diet/papaya.jpg\">\n    <ion-card-content>\n      <strong>Nutrition:</strong> (1 cup) 55 calories, 8g sugar, 3g fiber.<br><br>\n      Is there any fruit better for you than papaya? Flooded with vitamin C, replete\n      with vision-strengthening vitamin A, and blessed with one of the most favorable\n      fiber-to-sugar ratios imaginable, papaya proves itself to be one of the most\n      well-rounded foods on the planet. Papaya also boasts papain and chymopapain,\n      two potent enzymes that have been shown to fight inflammation, the cause of asthma,\n      arthritis and other serious conditions.\n      </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 71656:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fruits-modal/peaches-modal/peaches-modal.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/tabs/diet\" (click)=\"closeModal()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Fruit Peaches</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"/assets/images/diet/sliced-peaches.jpg\">\n    <ion-card-content>\n      <strong>Nutrition:</strong> (1 cup) 60 calories, 13g sugar, 2g fiber.<br><br>\n        Peaches pack lutein and zeaxanthin, powerful carotenoids proven to help protect\n        your peepers from macular degeneration. Plus, the blast of beta carotene may help\n        stave off heart disease and cancer. But a USDA survey found that peaches are the\n        most pesticide-laden fruit in the produce section, so if you can afford organic, you\n        might want to spring.\n      </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 56493:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fruits-modal/pineapple-modal/pineapple-modal.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/tabs/diet\" (click)=\"closeModal()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Fruit Pineapple</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"/assets/images/diet/sliced-pineapples.jpg\">\n    <ion-card-content>\n      <strong>Nutrition:</strong> (1 cup) 82 calories, 16g sugar, 2g fiber.<br><br>\n        Feeling low on energy? A cup of pineapple might just be the antidote. That's\n        because pineapple is one of nature's best sources of manganese, a trace mineral\n        that is essential for energy production. A cup provides 76 percent of your daily\n        recommended intake, making pineapple nature's answer to Red Bull.\n      </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 64441:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fruits-modal/strawberries-modal/strawberries-modal.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/tabs/diet\" (click)=\"closeModal()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Fruit Strawberries</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"/assets/images/diet/strawberries.jpg\">\n    <ion-card-content>\n      <strong>Nutrition:</strong> (1 cup) 49 calories, 7g sugar, 3g fiber.<br><br>\n        Beyond the monster dose of vitamin C (calorie for calorie, you'll get more C than\n        you'd find in an orange), strawberries also prove to be a rich source of phenols,\n        including the same brain-boosting, anti-inflammatory anthocyanins found in blueberries.\n        They also lay claim to a rare and powerful antioxidant called ellagitannin, which has been\n        shown to provide a stout defense against a variety of cancers.\n      </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 1458:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/avocado-modal/avocado-modal.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/tabs/diet\" (click)=\"closeModal()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Smoothie Avocado</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"/assets/images/diet/avocado-smoothie.jpg\">\n    <ion-card-content>\n      <strong>Nutrition:</strong> (1 medium Haas, peeled and pitted) 227 calories, 21g fat (3g sat fat), 9g fiber.<br><br>\n         Avocado might not be a traditional smoothie constituent, but we're convinced\n         that it should be. The calories come primarily from monounsaturated fat, the good\n         stuff that protects your heart and helps beat back hunger. Add to that an impressive\n         fiber load and you have the makings of a seriously satisfying smoothie. Plus, avocados\n         add a richness that makes it feel like you're splurging, even when you're not.\n      </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 97931:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/mango-modal/mango-modal.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/tabs/diet\" (click)=\"closeModal()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Smoothie Mango</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"/assets/images/diet/spinach-mango-smoothie.jpg\">\n    <ion-card-content>\n      <strong>Nutrition:</strong> (1 cup) 103 calories, 24g sugar, 3g fiber.<br><br>\n          This tropical treasure has become increasingly available in American supermarkets,\n          in both fresh and frozen forms. Yes, it's higher in sugar than almost any other fruit in\n          the produce section, but it also brings to the blender three-quarters of your day's vitamin C\n          and 25 percent of your vitamin A. Consider added sweeteners entirely superfluous when\n          making smoothies with mango.\n      </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 71084:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/tabs/diet\" (click)=\"closeModal()\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Smoothie Banana</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"/assets/images/diet/banana-smoothie.jpg\">\n    <ion-card-content>\n      <strong>Nutrition:</strong> (1 medium) 105 calories, 14g sugar, 3g fiber.<br><br>\n        Sure, there are fruits with deeper nutritional portfolios, but the humble banana serves as\n        an all-star utility player in the smoothie game. Not only does it offer a handful of hard-to-find\n        nutrients (heart-strengthening potassium, gut-friendly prebiotics), but it also provides smoothies\n        with a balanced, creamy texture and enough natural sweetness to ensure no need for added sugar.\n        Keep a few very ripe bananas in the freezer. When you're ready for a smoothie, slice off the peel and\n        blend away.\n      </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map