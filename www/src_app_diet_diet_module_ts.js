(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_diet_diet_module_ts"],{

/***/ 24862:
/*!*********************************************!*\
  !*** ./src/app/diet/diet-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietPageRoutingModule": () => (/* binding */ DietPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _diet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diet.page */ 31421);




const routes = [
    {
        path: '',
        component: _diet_page__WEBPACK_IMPORTED_MODULE_0__.DietPage
    },
    {
        path: 'avocado-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../modal/avocado-modal/avocado-modal.module */ 95992)).then(m => m.AvocadoModalPageModule)
    },
    {
        path: 'mango-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../modal/mango-modal/mango-modal.module */ 36521)).then(m => m.MangoModalPageModule)
    }
];
let DietPageRoutingModule = class DietPageRoutingModule {
};
DietPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DietPageRoutingModule);



/***/ }),

/***/ 27704:
/*!*************************************!*\
  !*** ./src/app/diet/diet.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietPageModule": () => (/* binding */ DietPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _diet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diet-routing.module */ 24862);
/* harmony import */ var _diet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diet.page */ 31421);







let DietPageModule = class DietPageModule {
};
DietPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _diet_routing_module__WEBPACK_IMPORTED_MODULE_0__.DietPageRoutingModule
        ],
        declarations: [_diet_page__WEBPACK_IMPORTED_MODULE_1__.DietPage]
    })
], DietPageModule);



/***/ }),

/***/ 31421:
/*!***********************************!*\
  !*** ./src/app/diet/diet.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietPage": () => (/* binding */ DietPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_diet_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./diet.page.html */ 10156);
/* harmony import */ var _diet_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./diet.page.scss */ 27057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/modal.page */ 28176);
/* harmony import */ var _modal_avocado_modal_avocado_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/avocado-modal/avocado-modal.page */ 69401);
/* harmony import */ var _modal_mango_modal_mango_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/mango-modal/mango-modal.page */ 65513);
/* harmony import */ var _fruits_modal_papaya_modal_papaya_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fruits-modal/papaya-modal/papaya-modal.page */ 28139);
/* harmony import */ var _fruits_modal_peaches_modal_peaches_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fruits-modal/peaches-modal/peaches-modal.page */ 40393);
/* harmony import */ var _fruits_modal_pineapple_modal_pineapple_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fruits-modal/pineapple-modal/pineapple-modal.page */ 99609);
/* harmony import */ var _fruits_modal_strawberries_modal_strawberries_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fruits-modal/strawberries-modal/strawberries-modal.page */ 38170);
/* harmony import */ var _fruits_modal_blueberries_modal_blueberries_modal_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fruits-modal/blueberries-modal/blueberries-modal.page */ 1975);
/* harmony import */ var _vegies_modal_soy_beans_modal_soy_beans_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../vegies-modal/soy-beans-modal/soy-beans-modal.page */ 77630);
/* harmony import */ var _vegies_modal_broccoli_modal_broccoli_modal_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../vegies-modal/broccoli-modal/broccoli-modal.page */ 1354);
/* harmony import */ var _vegies_modal_kale_modal_kale_modal_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../vegies-modal/kale-modal/kale-modal.page */ 67631);
/* harmony import */ var _vegies_modal_spinach_modal_spinach_modal_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../vegies-modal/spinach-modal/spinach-modal.page */ 88575);
/* harmony import */ var _vegies_modal_edamame_modal_edamame_modal_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../vegies-modal/edamame-modal/edamame-modal.page */ 39507);


















let DietPage = class DietPage {
    constructor(mdController) {
        this.mdController = mdController;
        this.cardTitle = 'banana';
        this.option = {
            slidesPerView: 1.5,
            centeredSlides: true,
            loop: false,
            spaceBetween: 20,
        };
    }
    bananaModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_2__.ModalPage,
            });
            return yield modal.present();
        });
    }
    avocadoModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _modal_avocado_modal_avocado_modal_page__WEBPACK_IMPORTED_MODULE_3__.AvocadoModalPage,
            });
            return yield modal.present();
        });
    }
    mangoModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _modal_mango_modal_mango_modal_page__WEBPACK_IMPORTED_MODULE_4__.MangoModalPage,
            });
            return yield modal.present();
        });
    }
    papayaModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _fruits_modal_papaya_modal_papaya_modal_page__WEBPACK_IMPORTED_MODULE_5__.PapayaModalPage,
            });
            return yield modal.present();
        });
    }
    peachesModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _fruits_modal_peaches_modal_peaches_modal_page__WEBPACK_IMPORTED_MODULE_6__.PeachesModalPage,
            });
            return yield modal.present();
        });
    }
    strawberriesModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _fruits_modal_strawberries_modal_strawberries_modal_page__WEBPACK_IMPORTED_MODULE_8__.StrawberriesModalPage,
            });
            return yield modal.present();
        });
    }
    pineappleModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _fruits_modal_pineapple_modal_pineapple_modal_page__WEBPACK_IMPORTED_MODULE_7__.PineappleModalPage,
            });
            return yield modal.present();
        });
    }
    blueberriesModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _fruits_modal_blueberries_modal_blueberries_modal_page__WEBPACK_IMPORTED_MODULE_9__.BlueberriesModalPage,
            });
            return yield modal.present();
        });
    }
    soybeansModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _vegies_modal_soy_beans_modal_soy_beans_modal_page__WEBPACK_IMPORTED_MODULE_10__.SoyBeansModalPage,
            });
            return yield modal.present();
        });
    }
    endamameModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _vegies_modal_edamame_modal_edamame_modal_page__WEBPACK_IMPORTED_MODULE_14__.EdamameModalPage,
            });
            return yield modal.present();
        });
    }
    broccoliModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _vegies_modal_broccoli_modal_broccoli_modal_page__WEBPACK_IMPORTED_MODULE_11__.BroccoliModalPage,
            });
            return yield modal.present();
        });
    }
    spinachModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _vegies_modal_spinach_modal_spinach_modal_page__WEBPACK_IMPORTED_MODULE_13__.SpinachModalPage,
            });
            return yield modal.present();
        });
    }
    kaleModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.mdController.create({
                component: _vegies_modal_kale_modal_kale_modal_page__WEBPACK_IMPORTED_MODULE_12__.KaleModalPage,
            });
            return yield modal.present();
        });
    }
    ngOnInit() {
        console.log(this.cardTitle);
    }
};
DietPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController }
];
DietPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
        selector: 'app-diet',
        template: _raw_loader_diet_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_diet_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DietPage);



/***/ }),

/***/ 27057:
/*!*************************************!*\
  !*** ./src/app/diet/diet.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-list-header ion-icon {\n  font-size: 34px;\n  margin-top: 0;\n  margin-bottom: 10px;\n  margin-left: 5px;\n}\n\nion-card {\n  margin: 0;\n  padding: 0;\n  border-radius: 15px;\n  text-align: left;\n  --background: rgb(250, 250, 250);\n}\n\nion-slide {\n  height: 370px;\n}\n\nion-list-header {\n  font-size: 22px;\n}\n\na {\n  text-decoration: none;\n  float: right;\n  margin-bottom: 15px;\n  margin-top: 15px;\n  position: relative;\n}\n\na ion-icon {\n  position: absolute;\n  font-size: 18px;\n  margin-top: 2px;\n}\n\n.learn-more-link {\n  right: 15px;\n}\n\nion-item {\n  --inner-padding-bottom: 0;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-top: 0;\n  right: 10px;\n}\n\nion-toolbar {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\nion-card-content {\n  font-size: 16px;\n}\n\n.swiper-slide-active {\n  transform: scale(1.05, 1.05);\n}\n\n.swiper-slide-active ion-card img {\n  transform: scale(1, 1);\n}\n\n.swiper-slide {\n  transition: 400ms all ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBRko7O0FBTUE7RUFDRSxXQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLHdDQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0FBSEY7O0FBTUE7RUFDRSw0QkFBQTtBQUhGOztBQU1NO0VBQ0ksc0JBQUE7QUFKVjs7QUFTQTtFQUNFLGlDQUFBO0FBTkYiLCJmaWxlIjoiZGlldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdC1oZWFkZXJ7XHJcbiAgaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbn1cclxuXHJcbmlvbi1zbGlkZXtcclxuICBoZWlnaHQ6IDM3MHB4O1xyXG59XHJcblxyXG5pb24tbGlzdC1oZWFkZXJ7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG5he1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuYSB7XHJcbiAgaW9uLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubGVhcm4tbW9yZS1saW5re1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcclxuICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tdG9vbGJhcntcclxuICAtLWlvbi1mb250LWZhbWlseTogJ2Jhcmxvdy1mb250LWxpZ2h0ZXInO1xyXG59XHJcblxyXG5pb24tY2FyZC1jb250ZW50e1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZS1hY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSwgMS4wNSk7XHJcblxyXG4gIGlvbi1jYXJkIHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUge1xyXG4gIHRyYW5zaXRpb246IDQwMG1zIGFsbCBlYXNlLWluLW91dDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 10156:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/diet/diet.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">Diet Plan & Tips</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Smoothies <ion-icon name=\"wine-outline\"></ion-icon></ion-list-header>\n    <ion-item>\n      <ion-slides [options]=\"option\">\n        <ion-slide>\n          <ion-card>\n            <img src=\"/assets/images/diet/banana-smoothie.jpg\">\n            <ion-card-header>\n              <ion-card-title>Banana</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Sure, there are fruits with deeper nutritional portf...\n              <a class=\"learn-more-link\" (click)=\"bananaModal()\">Read More<ion-icon name=\"chevron-forward-outline\"></ion-icon></a>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n        <ion-slide>\n          <ion-card>\n            <img src=\"/assets/images/diet/avocado-smoothie.jpg\">\n            <ion-card-header>\n              <ion-card-title>Avocado</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Avocado might not be a traditional smoothie...\n              <a class=\"learn-more-link\" (click)=\"avocadoModal()\">Read More<ion-icon name=\"chevron-forward-outline\"></ion-icon></a>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n        <ion-slide>\n          <ion-card>\n            <img src=\"/assets/images/diet/spinach-mango-smoothie.jpg\">\n            <ion-card-header>\n              <ion-card-title>Mango</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Avocado might not be a traditional smoothie...\n              <a class=\"learn-more-link\" (click)=\"mangoModal()\">Read More<ion-icon name=\"chevron-forward-outline\"></ion-icon></a>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>Vegetables <ion-icon name=\"leaf-outline\"></ion-icon></ion-list-header>\n    <ion-item>\n      <ion-slides [options]=\"option\">\n        <ion-slide>\n          <ion-card>\n            <img src=\"/assets/images/diet/soybeans.jpg\">\n            <ion-card-header>\n              <ion-card-title>Soybeans</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Soybeans are among the best vegetables in terms...\n              <a class=\"learn-more-link\" (click)=\"soybeansModal()\">Read More<ion-icon name=\"chevron-forward-outline\"></ion-icon></a>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n        <ion-slide>\n          <ion-card>\n            <img src=\"/assets/images/diet/edamame.jpg\">\n            <ion-card-header>\n              <ion-card-title>Edamame</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Edamame is one of the greatest snacks or sid...\n              <a class=\"learn-more-link\" (click)=\"endamameModal()\">Read More<ion-icon name=\"chevron-forward-outline\"></ion-icon></a>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n        <ion-slide>\n          <ion-card>\n            <img src=\"/assets/images/diet/broccoli.jpg\">\n            <ion-card-header>\n              <ion-card-title>Broccoli</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              If you are trying to cut fats or reduce your calories...\n              <a class=\"learn-more-link\" (click)=\"broccoliModal()\">Read More<ion-icon name=\"chevron-forward-outline\"></ion-icon></a>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n        <ion-slide>\n          <ion-card>\n            <img src=\"/assets/images/diet/spinach.jpg\">\n            <ion-card-header>\n              <ion-card-title>Spinach</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              In just one cup of boiled spinach, you can get 5...\n              <a class=\"learn-more-link\" (click)=\"spinachModal()\">Read More<ion-icon name=\"chevron-forward-outline\"></ion-icon></a>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n        <ion-slide>\n          <ion-card>\n            <img src=\"/assets/images/diet/kale.jpg\">\n            <ion-card-header>\n              <ion-card-title>Kale</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Very similar to spinach, kale is a great leafy gre...\n              <a class=\"learn-more-link\" (click)=\"kaleModal()\">Read More<ion-icon name=\"chevron-forward-outline\"></ion-icon></a>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>Fruits <ion-icon name=\"nutrition-outline\"></ion-icon></ion-list-header>\n    <ion-item>\n      <ion-slides [options]=\"option\">\n        <ion-slide>\n          <ion-card>\n            <img src=\"/assets/images/diet/papaya.jpg\">\n            <ion-card-header>\n              <ion-card-title>Papaya</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Is there any fruit better for you than papaya? Flood...\n              <a class=\"learn-more-link\" (click)=\"papayaModal()\">Read More<ion-icon name=\"chevron-forward-outline\"></ion-icon></a>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n        <ion-slide>\n          <ion-card>\n            <img src=\"/assets/images/diet/sliced-peaches.jpg\">\n            <ion-card-header>\n              <ion-card-title>Peaches</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Peaches pack lutein and zeaxanthin, powerful ca...\n              <a class=\"learn-more-link\" (click)=\"peachesModal()\">Read More<ion-icon name=\"chevron-forward-outline\"></ion-icon></a>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n        <ion-slide>\n          <ion-card>\n            <img src=\"/assets/images/diet/strawberries.jpg\">\n            <ion-card-header>\n              <ion-card-title>Strawberries</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Beyond the monster dose of vitamin C (calorie for...\n              <a class=\"learn-more-link\" (click)=\"strawberriesModal()\">Read More<ion-icon name=\"chevron-forward-outline\"></ion-icon></a>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n        <ion-slide>\n          <ion-card>\n            <img src=\"/assets/images/diet/sliced-pineapples.jpg\">\n            <ion-card-header>\n              <ion-card-title>Pineapple</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Feeling low on energy? A cup of pineapple might...\n              <a class=\"learn-more-link\" (click)=\"pineappleModal()\">Read More<ion-icon name=\"chevron-forward-outline\"></ion-icon></a>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n        <ion-slide>\n          <ion-card>\n            <img src=\"/assets/images/diet/spilled-blueberries.jpg\">\n            <ion-card-header>\n              <ion-card-title>Blueberries</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              Blueberries are best known in health circles...\n              <a class=\"learn-more-link\" (click)=\"blueberriesModal()\">Read More<ion-icon name=\"chevron-forward-outline\"></ion-icon></a>\n            </ion-card-content>\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_diet_diet_module_ts.js.map