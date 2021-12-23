(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_update-todo_update-todo_module_ts"],{

/***/ 66997:
/*!***********************************************************!*\
  !*** ./src/app/update-todo/update-todo-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateTodoPageRoutingModule": () => (/* binding */ UpdateTodoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _update_todo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-todo.page */ 69889);




const routes = [
    {
        path: '',
        component: _update_todo_page__WEBPACK_IMPORTED_MODULE_0__.UpdateTodoPage
    }
];
let UpdateTodoPageRoutingModule = class UpdateTodoPageRoutingModule {
};
UpdateTodoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateTodoPageRoutingModule);



/***/ }),

/***/ 21376:
/*!***************************************************!*\
  !*** ./src/app/update-todo/update-todo.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateTodoPageModule": () => (/* binding */ UpdateTodoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _update_todo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-todo-routing.module */ 66997);
/* harmony import */ var _update_todo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-todo.page */ 69889);







let UpdateTodoPageModule = class UpdateTodoPageModule {
};
UpdateTodoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _update_todo_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateTodoPageRoutingModule
        ],
        declarations: [_update_todo_page__WEBPACK_IMPORTED_MODULE_1__.UpdateTodoPage]
    })
], UpdateTodoPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_update-todo_update-todo_module_ts.js.map