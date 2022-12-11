(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppComponent {
    constructor() {
        this.title = 'wedding-invitation-card';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 0, consts: [[1, "container"], [1, "card-container"], [1, "name"], [1, "date"], [1, "location-container"], [1, "address"], [1, "navigation-container"], ["href", "https://waze.com/ul/hw281udn3f", "target", "_blank"], ["src", "/wedding-card/assets/waze.webp", 1, "navigation-icon"], ["href", "https://maps.app.goo.gl/vm5BsxXH8hxh5EKYA?g_st=ic", "target", "_blank"], ["src", "/wedding-card/assets/google-maps.webp", 1, "navigation-icon"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Gian Hao ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Su Ping ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "~ 07.01.2023 ~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Location: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " No 28, Jalan Setia Permai U13/41A, Setia Alam, 40170 Selangor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background-position: center;\n  background-size: cover;\n  background-image: url('pngtree-romantic-bride-floral-wedding-wedding-fair-beautiful-background-image_210178.jpg');\n  background-attachment: fixed;\n  background-repeat: no-repeat;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  padding-top: 28vh;\n  padding-left: 8vw;\n  padding-right: 8vw;\n  padding-bottom: 30vh;\n}\n\n.name[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: xx-large;\n  font-family: caveat;\n}\n\n.date[_ngcontent-%COMP%] {\n  margin-top: 1.2rem;\n  text-align: center;\n  font-size: xxx-large;\n  font-family: caveat;\n}\n\n.location-container[_ngcontent-%COMP%] {\n  margin-top: 1.2rem;\n  padding-left: 35vw;\n  padding-right: 10vw;\n}\n\n.address[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: large;\n  font-family: caveat;\n}\n\n.navigation-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 1.2rem;\n}\n\n.navigation-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 10px;\n  border-width: 1px;\n  border-color: black;\n  border-style: solid;\n  margin-left: 0.8rem;\n  margin-right: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUhBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFFSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL3BuZ3RyZWUtcm9tYW50aWMtYnJpZGUtZmxvcmFsLXdlZGRpbmctd2VkZGluZy1mYWlyLWJlYXV0aWZ1bC1iYWNrZ3JvdW5kLWltYWdlXzIxMDE3OC5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAyOHZoO1xuICAgIHBhZGRpbmctbGVmdDogOHZ3O1xuICAgIHBhZGRpbmctcmlnaHQ6IDh2dztcbiAgICBwYWRkaW5nLWJvdHRvbTogMzB2aDtcbn1cblxuLm5hbWUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIGZvbnQtZmFtaWx5OiBjYXZlYXQ7XG59XG5cbi5kYXRlIHtcbiAgICBtYXJnaW4tdG9wOiAxLjJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xuICAgIGZvbnQtZmFtaWx5OiBjYXZlYXQ7XG59XG5cbi5sb2NhdGlvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEuMnJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1dnc7XG4gICAgcGFkZGluZy1yaWdodDogMTB2dztcbn1cblxuLmFkZHJlc3Mge1xuICAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGZvbnQtZmFtaWx5OiBjYXZlYXQ7XG59XG5cbi5uYXZpZ2F0aW9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxLjJyZW07XG59XG5cbi5uYXZpZ2F0aW9uLWljb24ge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBtYXJnaW4tbGVmdDogMC44cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC44cmVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jordantan/Documents/Jordan project/wedding-invitation-card/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map