webpackJsonp([1],{

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AboutModule\", function() { return AboutModule; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_routes__ = __webpack_require__(569);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about_component__ = __webpack_require__(567);\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\n\r\n\r\n\r\n\r\nvar AboutModule = (function () {\r\n    function AboutModule() {\r\n    }\r\n    return AboutModule;\r\n}());\r\nAboutModule = __decorate([\r\n    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"a\" /* NgModule */])({\r\n        imports: [\r\n            __WEBPACK_IMPORTED_MODULE_1__angular_common__[\"a\" /* CommonModule */],\r\n            __WEBPACK_IMPORTED_MODULE_2__about_routes__[\"a\" /* AboutRoutes */]\r\n        ],\r\n        declarations: [\r\n            __WEBPACK_IMPORTED_MODULE_3__components_about_component__[\"a\" /* AboutComponent */]\r\n        ]\r\n    })\r\n], AboutModule);\r\n\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/components/about/about.module.ts\n// module id = 565\n// module chunks = 1\n\n//# sourceURL=webpack:///./app/components/about/about.module.ts?");

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return AboutComponent; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n\r\nvar AboutComponent = (function () {\r\n    function AboutComponent() {\r\n        this.message = 'Hello from AboutComponent constructor';\r\n    }\r\n    return AboutComponent;\r\n}());\r\nAboutComponent = __decorate([\r\n    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"b\" /* Component */])({\r\n        selector: 'about-component',\r\n        template: __webpack_require__(571)\r\n    }),\r\n    __metadata(\"design:paramtypes\", [])\r\n], AboutComponent);\r\n\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/components/about/components/about.component.ts\n// module id = 567\n// module chunks = 1\n\n//# sourceURL=webpack:///./app/components/about/components/about.component.ts?");

/***/ }),

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return AboutRoutes; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(91);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_about_component__ = __webpack_require__(567);\n\r\n\r\nvar routes = [\r\n    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_about_component__[\"a\" /* AboutComponent */] }\r\n];\r\nvar AboutRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__[\"a\" /* RouterModule */].forChild(routes);\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/components/about/about.routes.ts\n// module id = 569\n// module chunks = 1\n\n//# sourceURL=webpack:///./app/components/about/about.routes.ts?");

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"container-fluid\\\">\\r\\n\\r\\n    <h1>{{message}}</h1>\\r\\n\\r\\n</div>\"\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/components/about/components/about.component.html\n// module id = 571\n// module chunks = 1\n\n//# sourceURL=webpack:///./app/components/about/components/about.component.html?");

/***/ })

});