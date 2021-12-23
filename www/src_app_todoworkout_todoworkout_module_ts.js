(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_todoworkout_todoworkout_module_ts"],{

/***/ 53515:
/*!***********************************************************!*\
  !*** ./src/app/todoworkout/todoworkout-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoworkoutPageRoutingModule": () => (/* binding */ TodoworkoutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _todoworkout_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoworkout.page */ 55160);




const routes = [
    {
        path: '',
        component: _todoworkout_page__WEBPACK_IMPORTED_MODULE_0__.TodoworkoutPage
    }
];
let TodoworkoutPageRoutingModule = class TodoworkoutPageRoutingModule {
};
TodoworkoutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TodoworkoutPageRoutingModule);



/***/ }),

/***/ 20070:
/*!***************************************************!*\
  !*** ./src/app/todoworkout/todoworkout.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoworkoutPageModule": () => (/* binding */ TodoworkoutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _todoworkout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoworkout-routing.module */ 53515);
/* harmony import */ var _todoworkout_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoworkout.page */ 55160);







let TodoworkoutPageModule = class TodoworkoutPageModule {
};
TodoworkoutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _todoworkout_routing_module__WEBPACK_IMPORTED_MODULE_0__.TodoworkoutPageRoutingModule
        ],
        declarations: [_todoworkout_page__WEBPACK_IMPORTED_MODULE_1__.TodoworkoutPage]
    })
], TodoworkoutPageModule);



/***/ }),

/***/ 55160:
/*!*************************************************!*\
  !*** ./src/app/todoworkout/todoworkout.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TodoworkoutPage": () => (/* binding */ TodoworkoutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_todoworkout_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./todoworkout.page.html */ 76089);
/* harmony import */ var _todoworkout_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoworkout.page.scss */ 9829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 25897);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ 11000);
/* harmony import */ var _update_todo_update_todo_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../update-todo/update-todo.page */ 69889);
/* harmony import */ var _add_workout_add_workout_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-workout/add-workout.page */ 93563);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ 3420);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);



/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */








let TodoworkoutPage = class TodoworkoutPage {
    constructor(userService, dataService, toastController, modalController, router) {
        this.userService = userService;
        this.dataService = dataService;
        this.toastController = toastController;
        this.modalController = modalController;
        this.router = router;
        this.pop = false;
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 2000,
            });
            toast.present();
        });
    }
    addWorkoutModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _add_workout_add_workout_page__WEBPACK_IMPORTED_MODULE_5__.AddWorkoutPage,
            });
            this.router.navigate(['/add-workout']);
            return yield modal.present();
        });
    }
    refreshPage() {
        this.ionViewDidEnter();
    }
    ionViewDidEnter() {
        let userObj = this.userService.getUser();
        let account_id = userObj.userId;
        this.dataService.request('getall', { account_id }).subscribe((res) => {
            var _a;
            if (res.data) {
                this.todos = res.data;
                if (((_a = this.todos) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                    this.pop = true;
                    this.presentToast('No Plan listed. Add Plans now.');
                }
                else {
                    this.pop = false;
                }
            }
        });
    }
    delete(workout_id, index) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to retrieve this.',
            icon: 'warning',
            allowOutsideClick: false,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Plan Delete',
                    text: 'You have successfully deleted plan.',
                    showConfirmButton: false,
                    timer: 1600
                });
                this.dataService
                    .request('deletetodo', {
                    workout_id: workout_id,
                })
                    .subscribe((res) => {
                    var _a;
                    if (res.data) {
                        this.todos.splice(index, 1);
                        if (((_a = this.todos) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                            this.pop = true;
                        }
                        else {
                            this.pop = false;
                        }
                    }
                    this.presentToast('No Plan listed. Add plan now.');
                });
            }
        });
    }
    done(workout_id, index) {
        this.dataService
            .request('deletetodo', { workout_id })
            .subscribe((res) => {
            var _a;
            // console.log(res);
            if (res.data) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Great Job!',
                    text: 'Plan is successfully completed. Add new plan again now.',
                    showConfirmButton: false,
                    timer: 1600
                });
                this.todos.splice(index, 1);
                if (((_a = this.todos) === null || _a === void 0 ? void 0 : _a.length) === 0) {
                    this.pop = true;
                }
                else {
                    this.pop = false;
                }
            }
            this.presentToast('Great work! Plan completed.');
        });
    }
    edit(todo_obj, index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _update_todo_update_todo_page__WEBPACK_IMPORTED_MODULE_4__.UpdateTodoPage,
                componentProps: {
                    todo_obj,
                },
                cssClass: 'my-custom-class',
            });
            modal.onDidDismiss().then((data) => {
                const update_obj = data['data'];
                // console.log(update_obj);
                if (update_obj) {
                    console.log(update_obj);
                    this.update(update_obj, index);
                }
                else {
                    console.log('empty');
                }
            });
            return yield modal.present();
        });
    }
    update(update_obj, index) {
        console.log(update_obj);
        this.dataService.request('updatetodo', update_obj).subscribe((res) => {
            console.log(res);
            if (res.error) {
                this.presentToast(res.error);
            }
            else if (res.data) {
                this.todos[index] = update_obj;
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Plan Update',
                    text: 'Plan update success. Check the updated plan now.',
                    showConfirmButton: false,
                    timer: 1600
                });
            }
        });
    }
    ngOnInit() {
    }
};
TodoworkoutPage.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router }
];
TodoworkoutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-todoworkout',
        template: _raw_loader_todoworkout_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_todoworkout_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TodoworkoutPage);



/***/ }),

/***/ 9829:
/*!***************************************************!*\
  !*** ./src/app/todoworkout/todoworkout.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\n.date {\n  float: right;\n  font-size: 14px !important;\n}\n\n.done {\n  width: 125px !important;\n}\n\nion-title {\n  margin-left: 15px;\n}\n\n.refresh-btn {\n  float: right;\n  position: relative;\n  font-size: 28px;\n  margin-right: 15px;\n}\n\nion-card-title {\n  --ion-font-family: \"barlow-font-regular\";\n  font-size: 22px;\n}\n\nion-card-content, ion-card-subtitle {\n  font-size: 16px;\n}\n\nion-button {\n  float: right;\n  border: none !important;\n  --box-shadow:none;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  text-transform: none;\n  font-size: 14px;\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\nion-icon {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG93b3Jrb3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJ0b2Rvd29ya291dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcclxuICAtLWlvbi1mb250LWZhbWlseTogJ2Jhcmxvdy1mb250LWxpZ2h0ZXInO1xyXG59XHJcblxyXG4uZGF0ZXtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kb25le1xyXG4gIHdpZHRoOiAxMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdGl0bGV7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5yZWZyZXNoLWJ0bntcclxuICBmbG9hdDpyaWdodDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGV7XHJcbiAgLS1pb24tZm9udC1mYW1pbHk6ICdiYXJsb3ctZm9udC1yZWd1bGFyJztcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQsIGlvbi1jYXJkLXN1YnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLS1ib3gtc2hhZG93Om5vbmU7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC0taW9uLWZvbnQtZmFtaWx5OiAnYmFybG93LWZvbnQtbGlnaHRlcic7XHJcbn1cclxuXHJcbmlvbi1pY29ue1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 76089:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todoworkout/todoworkout.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-icon class=\"refresh-btn\" name=\"refresh-outline\" (click)=\"refreshPage()\"></ion-icon>\n    <ion-title class=\"ion-text-center\">My Workout Plans</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let todo of todos; index as i\" lines=\"none\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>{{ todo.workout_title}}</ion-card-title>\n          <ion-card-subtitle>Repetitions: {{todo.workout_reps}}</ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content>\n          <ion-label class=\"date\">Due: {{ todo.workout_date}}</ion-label><br>\n          <ion-button color=\"success\" class=\"done\" (click)=\"done(todo.workout_id,i)\">Done</ion-button>\n        <ion-button color=\"light\" (click)=\"edit(todo,i)\">Edit</ion-button>\n          <ion-button color=\"light\" (click)=\"delete(todo.workout_id,i)\">Remove</ion-button>\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addWorkoutModal()\">\n      <ion-icon name=\"add\" defaultHref=\"/add-workout\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_todoworkout_todoworkout_module_ts.js.map