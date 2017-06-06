webpackJsonp([0],{

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BladeModule\", function() { return BladeModule; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(159);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_blade_forms_module__ = __webpack_require__(321);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blade_routes__ = __webpack_require__(587);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_blade_details_component__ = __webpack_require__(586);\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar BladeModule = (function () {\r\n    function BladeModule() {\r\n    }\r\n    return BladeModule;\r\n}());\r\nBladeModule = __decorate([\r\n    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"NgModule\"])({\r\n        imports: [\r\n            __WEBPACK_IMPORTED_MODULE_1__angular_common__[\"CommonModule\"],\r\n            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__[\"a\" /* SharedModule */],\r\n            __WEBPACK_IMPORTED_MODULE_2__angular_forms__[\"ReactiveFormsModule\"],\r\n            __WEBPACK_IMPORTED_MODULE_4__forms_blade_forms_module__[\"a\" /* BladeFormsModule */],\r\n            __WEBPACK_IMPORTED_MODULE_5__blade_routes__[\"a\" /* BladeRoutes */]\r\n        ],\r\n        declarations: [\r\n            __WEBPACK_IMPORTED_MODULE_6__components_blade_details_component__[\"a\" /* BladeDetailsComponent */]\r\n        ]\r\n    })\r\n], BladeModule);\r\n\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/components/blade/blade.module.ts\n// module id = 585\n// module chunks = 0\n\n//# sourceURL=webpack:///./app/components/blade/blade.module.ts?");

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BladeDetailsComponent; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(91);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_models__ = __webpack_require__(322);\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\n\r\n\r\n\r\n\r\nvar BladeDetailsComponent = (function () {\r\n    function BladeDetailsComponent(route, formBuilder) {\r\n        this.route = route;\r\n        this.formBuilder = formBuilder;\r\n    }\r\n    BladeDetailsComponent.prototype.ngOnInit = function () {\r\n        var _this = this;\r\n        this.myForm = this.formBuilder.group({\r\n            mySwitch: [true]\r\n        });\r\n        this.sub = this.route.params.subscribe(function (params) {\r\n            _this.bladeName = params['name'];\r\n            _this.activeBlades = new Array();\r\n            if (_this.bladeName === 'Explore') {\r\n                var blade = new __WEBPACK_IMPORTED_MODULE_3__models_models__[\"a\" /* Blade */]();\r\n                blade.title = _this.bladeName;\r\n                blade.subTitle = _this.bladeName;\r\n                blade.bladeSize = __WEBPACK_IMPORTED_MODULE_3__models_models__[\"b\" /* BladeSize */].Large;\r\n                blade.bladeLayout = __WEBPACK_IMPORTED_MODULE_3__models_models__[\"c\" /* BladeLayout */].OneColumn;\r\n                blade.bladeCommands.push(new __WEBPACK_IMPORTED_MODULE_3__models_models__[\"d\" /* OpenLinkCommand */]('Open Google', 'http://www.google.com'));\r\n                _this.activeBlades.push(blade);\r\n            }\r\n            if (_this.bladeName === 'Visualize') {\r\n                var blade = new __WEBPACK_IMPORTED_MODULE_3__models_models__[\"a\" /* Blade */]();\r\n                blade.title = _this.bladeName;\r\n                blade.subTitle = _this.bladeName;\r\n                blade.bladeSize = __WEBPACK_IMPORTED_MODULE_3__models_models__[\"b\" /* BladeSize */].Medium;\r\n                blade.bladeLayout = __WEBPACK_IMPORTED_MODULE_3__models_models__[\"c\" /* BladeLayout */].TwoColumns;\r\n                blade.bladeCommands.push(new __WEBPACK_IMPORTED_MODULE_3__models_models__[\"d\" /* OpenLinkCommand */]('Open Google', 'http://www.google.com'));\r\n                _this.activeBlades.push(blade);\r\n            }\r\n            if (_this.bladeName === 'Settings') {\r\n                var blade = new __WEBPACK_IMPORTED_MODULE_3__models_models__[\"a\" /* Blade */]();\r\n                blade.title = _this.bladeName;\r\n                blade.subTitle = _this.bladeName;\r\n                blade.bladeSize = __WEBPACK_IMPORTED_MODULE_3__models_models__[\"b\" /* BladeSize */].Large;\r\n                blade.bladeLayout = __WEBPACK_IMPORTED_MODULE_3__models_models__[\"c\" /* BladeLayout */].ThreeColumns;\r\n                blade.bladeCommands.push(new __WEBPACK_IMPORTED_MODULE_3__models_models__[\"d\" /* OpenLinkCommand */]('Open Google', 'http://www.google.com'));\r\n                _this.activeBlades.push(blade);\r\n            }\r\n        });\r\n    };\r\n    BladeDetailsComponent.prototype.ngOnDestroy = function () {\r\n        this.sub.unsubscribe();\r\n    };\r\n    BladeDetailsComponent.prototype.expandBlade = function (blade) {\r\n        blade.fullScreenMode = !blade.fullScreenMode;\r\n    };\r\n    BladeDetailsComponent.prototype.removeBlade = function (blade) {\r\n        var index = this.activeBlades.indexOf(blade);\r\n        if (index > -1) {\r\n            this.activeBlades.splice(index, 1);\r\n        }\r\n    };\r\n    BladeDetailsComponent.prototype.getClass = function (blade) {\r\n        if (blade.fullScreenMode) {\r\n            return 'blade_full_screen';\r\n        }\r\n        switch (blade.bladeSize) {\r\n            case __WEBPACK_IMPORTED_MODULE_3__models_models__[\"b\" /* BladeSize */].Small:\r\n                return 'blade-size-small';\r\n            case __WEBPACK_IMPORTED_MODULE_3__models_models__[\"b\" /* BladeSize */].Medium:\r\n                return 'blade-size-medium';\r\n            case __WEBPACK_IMPORTED_MODULE_3__models_models__[\"b\" /* BladeSize */].Large:\r\n                return 'blade-size-large';\r\n            case __WEBPACK_IMPORTED_MODULE_3__models_models__[\"b\" /* BladeSize */].XLarge:\r\n                return 'blade-size-xlarge';\r\n        }\r\n        return '';\r\n    };\r\n    return BladeDetailsComponent;\r\n}());\r\nBladeDetailsComponent = __decorate([\r\n    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__[\"Component\"])({\r\n        selector: 'blade-details',\r\n        template: __webpack_require__(588)\r\n    }),\r\n    __metadata(\"design:paramtypes\", [__WEBPACK_IMPORTED_MODULE_2__angular_router__[\"b\" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__[\"FormBuilder\"]])\r\n], BladeDetailsComponent);\r\n\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/components/blade/components/blade-details.component.ts\n// module id = 586\n// module chunks = 0\n\n//# sourceURL=webpack:///./app/components/blade/components/blade-details.component.ts?");

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return BladeRoutes; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(91);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_blade_details_component__ = __webpack_require__(586);\n\r\n\r\nvar routes = [\r\n    { path: '', redirectTo: '/home', pathMatch: 'full' },\r\n    { path: ':name', component: __WEBPACK_IMPORTED_MODULE_1__components_blade_details_component__[\"a\" /* BladeDetailsComponent */] }\r\n];\r\nvar BladeRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__[\"a\" /* RouterModule */].forChild(routes);\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/components/blade/blade.routes.ts\n// module id = 587\n// module chunks = 0\n\n//# sourceURL=webpack:///./app/components/blade/blade.routes.ts?");

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"coreui-portal\\\">\\r\\n    <main-nav></main-nav>\\r\\n    <div class=\\\"coreui-portal-main\\\">\\r\\n        <blade-nav class=\\\"coreui-sidebar coreui-sidebar-is-collapsed\\\"></blade-nav>\\r\\n        <div class=\\\"coreui-portal-content\\\">\\r\\n            <div class=\\\"coreui-blade-layout\\\">\\r\\n                <div *ngFor=\\\"let blade of activeBlades;\\\">\\r\\n                    <div class=\\\"blade {{getClass(blade)}}\\\">\\r\\n                        <div class=\\\"blade-header\\\">\\r\\n\\r\\n                            <div class=\\\"blade-header-title\\\">\\r\\n                                <h2>{{blade.title}}</h2>\\r\\n                                <h3>{{blade.subTitle}}</h3>\\r\\n                            </div>\\r\\n\\r\\n                            <div class=\\\"blade-actions\\\">\\r\\n                                <button title=\\\"Expand\\\" type=\\\"button\\\" (click)=\\\"expandBlade(blade)\\\">\\r\\n                                    <i class=\\\"fa fa-expand fa-lg\\\"></i>\\r\\n                                </button>\\r\\n                                <button title=\\\"Close\\\" type=\\\"button\\\" (click)=\\\"removeBlade(blade)\\\">\\r\\n                                    <i class=\\\"fa fa-close fa-lg\\\"></i>\\r\\n                                </button>\\r\\n                            </div>\\r\\n\\r\\n                            <div class=\\\"blade-commands\\\">\\r\\n                                <button type=\\\"button\\\" *ngFor=\\\"let bladeCommand of blade.bladeCommands;\\\" (click)=\\\"bladeCommand.execute()\\\">\\r\\n                                    <i class=\\\"fa fa-lg\\\" data-bind=\\\"css: icon\\\"></i>\\r\\n                                    <span>{{bladeCommand.title}}</span>\\r\\n                                </button>\\r\\n                            </div>\\r\\n                        </div>\\r\\n                        <div class=\\\"blade-content-wrapper\\\" style=\\\"padding: 15px\\\">\\r\\n\\r\\n                            <div class=\\\"row\\\" *ngIf=\\\"blade.bladeLayout==1\\\">\\r\\n                                <div class=\\\"col-md-12\\\">\\r\\n                                    //data-bind=\\\"dynamicHtml: content\\\" {{blade.title}}\\r\\n\\r\\n                                    <blade-form [formId]=\\\"123\\\"></blade-form>\\r\\n\\r\\n                                    <!--<dropdown-picker-single></dropdown-picker-single>\\r\\n\\r\\n\\r\\n\\r\\n<h3>Reactive Forms</h3>\\r\\n<form [formGroup]=\\\"myForm\\\" (ngSubmit)=\\\"submit()\\\">\\r\\n  <app-switch formControlName=\\\"mySwitch\\\" [label]=\\\"'My Switch'\\\"></app-switch>\\r\\n  <button>Submit</button>\\r\\n</form>-->\\r\\n\\r\\n\\r\\n                                </div>\\r\\n                            </div>\\r\\n\\r\\n                            <div class=\\\"row\\\" *ngIf=\\\"blade.bladeLayout==2\\\">\\r\\n                                <div class=\\\"col-md-6\\\">\\r\\n                                    //data-bind=\\\"dynamicHtml: content\\\" {{blade.title}}\\r\\n                                </div>\\r\\n\\r\\n                                <div class=\\\"col-md-6\\\">\\r\\n                                    //data-bind=\\\"dynamicHtml: content\\\" {{blade.title}}\\r\\n                                </div>\\r\\n                            </div>\\r\\n\\r\\n                            <div class=\\\"row\\\" *ngIf=\\\"blade.bladeLayout==3\\\">\\r\\n                                <div class=\\\"col-md-4\\\">\\r\\n                                    //data-bind=\\\"dynamicHtml: content\\\" {{blade.title}}\\r\\n                                </div>\\r\\n\\r\\n                                <div class=\\\"col-md-4\\\">\\r\\n                                    //data-bind=\\\"dynamicHtml: content\\\" {{blade.title}}\\r\\n                                </div>\\r\\n\\r\\n                                <div class=\\\"col-md-4\\\">\\r\\n                                    //data-bind=\\\"dynamicHtml: content\\\" {{blade.title}}\\r\\n                                </div>\\r\\n                            </div>\\r\\n\\r\\n                        </div>\\r\\n                    </div>\\r\\n                </div>\\r\\n\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>\"\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/components/blade/components/blade-details.component.html\n// module id = 588\n// module chunks = 0\n\n//# sourceURL=webpack:///./app/components/blade/components/blade-details.component.html?");

/***/ })

});