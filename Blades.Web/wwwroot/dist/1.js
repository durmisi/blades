webpackJsonp([1],{

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignerRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DesignerComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_designer_component__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_component__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_blades_blades_component__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_blades_new_blade_component__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_controls_controls_component__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_controls_new_control_component__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_forms_forms_component__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_forms_new_form_component__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_models_models_component__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_models_new_model_component__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_editors_editors_component__ = __webpack_require__(638);












var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__components_designer_component__["a" /* DesignerComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_home_component__["a" /* HomeComponent */] },
            { path: 'blades', component: __WEBPACK_IMPORTED_MODULE_3__components_blades_blades_component__["a" /* BladesComponent */] },
            { path: 'blades/new', component: __WEBPACK_IMPORTED_MODULE_4__components_blades_new_blade_component__["a" /* NewBladeComponent */] },
            { path: 'controls', component: __WEBPACK_IMPORTED_MODULE_5__components_controls_controls_component__["a" /* ControlsComponent */] },
            { path: 'controls/new', component: __WEBPACK_IMPORTED_MODULE_6__components_controls_new_control_component__["a" /* NewControlComponent */] },
            { path: 'forms', component: __WEBPACK_IMPORTED_MODULE_7__components_forms_forms_component__["a" /* FormsComponent */] },
            { path: 'forms/new', component: __WEBPACK_IMPORTED_MODULE_8__components_forms_new_form_component__["a" /* NewFormComponent */] },
            { path: 'models', component: __WEBPACK_IMPORTED_MODULE_9__components_models_models_component__["a" /* ModelsComponent */] },
            { path: 'models/new', component: __WEBPACK_IMPORTED_MODULE_10__components_models_new_model_component__["a" /* NewModelComponent */] },
            { path: 'editors', component: __WEBPACK_IMPORTED_MODULE_11__components_editors_editors_component__["a" /* EditorsComponent */] }
        ]
    }
];
var DesignerRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);
var DesignerComponents = [
    __WEBPACK_IMPORTED_MODULE_1__components_designer_component__["a" /* DesignerComponent */],
    __WEBPACK_IMPORTED_MODULE_2__components_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components_blades_blades_component__["a" /* BladesComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components_controls_controls_component__["a" /* ControlsComponent */],
    __WEBPACK_IMPORTED_MODULE_7__components_forms_forms_component__["a" /* FormsComponent */],
    __WEBPACK_IMPORTED_MODULE_9__components_models_models_component__["a" /* ModelsComponent */],
    __WEBPACK_IMPORTED_MODULE_11__components_editors_editors_component__["a" /* EditorsComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_blades_new_blade_component__["a" /* NewBladeComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components_controls_new_control_component__["a" /* NewControlComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components_forms_new_form_component__["a" /* NewFormComponent */],
    __WEBPACK_IMPORTED_MODULE_10__components_models_new_model_component__["a" /* NewModelComponent */]
];


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignerModule", function() { return DesignerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__designer_routes__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navigation_component__ = __webpack_require__(644);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DesignerModule = (function () {
    function DesignerModule() {
    }
    return DesignerModule;
}());
DesignerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__designer_routes__["a" /* DesignerRoutes */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__components_navigation_component__["a" /* NavigationComponent */]
        ].concat(__WEBPACK_IMPORTED_MODULE_2__designer_routes__["b" /* DesignerComponents */])
    })
], DesignerModule);



/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BladesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BladesComponent = (function () {
    function BladesComponent() {
    }
    return BladesComponent;
}());
BladesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blades-component',
        template: __webpack_require__(985)
    }),
    __metadata("design:paramtypes", [])
], BladesComponent);



/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBladeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewBladeComponent = (function () {
    function NewBladeComponent() {
    }
    return NewBladeComponent;
}());
NewBladeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-blade-component',
        template: __webpack_require__(986)
    }),
    __metadata("design:paramtypes", [])
], NewBladeComponent);



/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ControlsComponent = (function () {
    function ControlsComponent() {
    }
    return ControlsComponent;
}());
ControlsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'controls-component',
        template: __webpack_require__(987)
    }),
    __metadata("design:paramtypes", [])
], ControlsComponent);



/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewControlComponent = (function () {
    function NewControlComponent() {
    }
    return NewControlComponent;
}());
NewControlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-control-component',
        template: __webpack_require__(988)
    }),
    __metadata("design:paramtypes", [])
], NewControlComponent);



/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DesignerComponent = (function () {
    function DesignerComponent() {
    }
    return DesignerComponent;
}());
DesignerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'designer-component',
        template: __webpack_require__(989)
    }),
    __metadata("design:paramtypes", [])
], DesignerComponent);



/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditorsComponent = (function () {
    function EditorsComponent() {
    }
    return EditorsComponent;
}());
EditorsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'editors-component',
        template: __webpack_require__(990)
    }),
    __metadata("design:paramtypes", [])
], EditorsComponent);



/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormsComponent = (function () {
    function FormsComponent() {
    }
    return FormsComponent;
}());
FormsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'forms-component',
        template: __webpack_require__(991)
    }),
    __metadata("design:paramtypes", [])
], FormsComponent);



/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewFormComponent = (function () {
    function NewFormComponent() {
    }
    return NewFormComponent;
}());
NewFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-form-component',
        template: __webpack_require__(992)
    }),
    __metadata("design:paramtypes", [])
], NewFormComponent);



/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home-component',
        template: __webpack_require__(993)
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModelsComponent = (function () {
    function ModelsComponent() {
    }
    return ModelsComponent;
}());
ModelsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'models-component',
        template: __webpack_require__(994)
    }),
    __metadata("design:paramtypes", [])
], ModelsComponent);



/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewModelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewModelComponent = (function () {
    function NewModelComponent() {
    }
    return NewModelComponent;
}());
NewModelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'new-model-component',
        template: __webpack_require__(995)
    }),
    __metadata("design:paramtypes", [])
], NewModelComponent);



/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'designer-navigation',
        template: __webpack_require__(996)
    }),
    __metadata("design:paramtypes", [])
], NavigationComponent);



/***/ }),

/***/ 985:
/***/ (function(module, exports) {

module.exports = "\r\n<h3 class=\"pull-left\">\r\n    Blades\r\n</h3>\r\n<div class=\"pull-right\">\r\n    <a [routerLink]=\"['/designer/blades/new']\" class=\"btn btn-success\">\r\n        New Blade\r\n    </a>\r\n</div>\r\n\r\n<div class=\"clearfix\"></div>\r\n<hr />\r\n\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n    <tr>\r\n        <th>Name</th>\r\n        <th>Title</th>\r\n        <th>Status</th>\r\n        <th class=\"col-md-1\"></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n        <td>Blade1</td>\r\n        <td>Blade #1</td>\r\n        <td>Active</td>\r\n        <td>\r\n            <button class=\"btn btn-primary\">Edit</button>\r\n            <button class=\"btn btn-danger\">Delete</button>\r\n        </td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>Blade2</td>\r\n        <td>Blade #2</td>\r\n        <td>Active</td>\r\n        <td>\r\n            <button class=\"btn btn-primary\">Edit</button>\r\n            <button class=\"btn btn-danger\">Delete</button>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>Blade3</td>\r\n        <td>Blade #3</td>\r\n        <td>Active</td>\r\n        <td>\r\n            <button class=\"btn btn-primary\">Edit</button>\r\n            <button class=\"btn btn-danger\">Delete</button>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>";

/***/ }),

/***/ 986:
/***/ (function(module, exports) {

module.exports = "\r\n<style>\r\n    table {\r\n        margin-bottom: 0px !important;\r\n    }\r\n\r\n    td {\r\n        border-top: none !important;\r\n    }\r\n</style>\r\n\r\n<h3>\r\n    BLADE #111\r\n</h3>  <hr />\r\n\r\n\r\n<div class=\"row\">\r\n\r\n    <div class=\"col-md-9\">\r\n\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\">\r\n                Control toolbar:\r\n            </label>\r\n            <div style=\"border: solid 1px #000; padding: 20px; text-align: left; font-weight: bold\">\r\n\r\n\r\n                <table class=\"table\">\r\n                    <tr>\r\n                        <td><button class=\"btn btn-default\">Form Control</button></td>\r\n                        <td><button class=\"btn btn-default\">Grid Control</button></td>\r\n                        <td><button class=\"btn btn-default\">Chart Control</button></td>\r\n                        <td><button class=\"btn btn-default\">Image Control</button></td>\r\n                        <td><button class=\"btn btn-default\">Video Control</button></td>\r\n                        <td><button class=\"btn btn-default\">Open Blade Control</button></td>\r\n                        <td><button class=\"btn btn-default\">CustomControl 1</button></td>\r\n                        <td><button class=\"btn btn-default\">CustomControl 2</button></td>\r\n                        \r\n                    </tr>\r\n                </table>\r\n                \r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n\r\n            <div style=\"border: dotted 1px #ccc; padding: 20px; text-align: center; font-weight: bold\">\r\n                Zone 1 (  Drag a control from the control toolbar)\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"col-md-3\">\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\">\r\n                Name:\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\">\r\n                Title:\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\">\r\n                Size:\r\n            </label>\r\n            <select class=\"form-control\">\r\n                <option>Small</option>\r\n                <option>Medium</option>\r\n                <option>Large</option>\r\n                <option>Fullscreen</option>\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\">\r\n                Layout:\r\n            </label>\r\n            <select class=\"form-control\">\r\n                <option>1 column</option>\r\n                <option>2 columns</option>\r\n                <option>3 columns</option>\r\n                <option>4 columns</option>\r\n            </select>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\">\r\n                Show in main navigation:\r\n            </label>\r\n            <select class=\"form-control\">\r\n                <option>Yes</option>\r\n                <option>No</option>\r\n            </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-success\">Save</button>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>";

/***/ }),

/***/ 987:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<h3 class=\"pull-left\">\r\n    Controls\r\n</h3>\r\n<div class=\"pull-right\">\r\n    <a [routerLink]=\"['/designer/controls/new']\" class=\"btn btn-success\">\r\n        Add Control\r\n    </a>\r\n</div>\r\n\r\n<div class=\"clearfix\"></div>\r\n<hr />\r\n\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <th>Name</th>\r\n            <th>Title</th>\r\n            <th>Status</th>\r\n            <th class=\"col-md-1\"></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr>\r\n            <td>LoadFormControl</td>\r\n            <td>Load Form Control</td>\r\n            <td>Active</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">Edit</button>\r\n                <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n            <td>GridControl</td>\r\n            <td>Grid Control</td>\r\n            <td>Active</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">Edit</button>\r\n                <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n            <td>ChartControl</td>\r\n            <td>Chart Control</td>\r\n            <td>Active</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">Edit</button>\r\n                <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>MenuControl</td>\r\n            <td>Menu Control</td>\r\n            <td>Active</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">Edit</button>\r\n                <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n            <td>LoadImageControl</td>\r\n            <td>Load Image Control</td>\r\n            <td>Active</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">Edit</button>\r\n                <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n            <td>LoadVideoControl</td>\r\n            <td>Load Video Control</td>\r\n            <td>Active</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">Edit</button>\r\n                <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n            <td>OpenBladeButtonControl</td>\r\n            <td>Open Blade</td>\r\n            <td>Active</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">Edit</button>\r\n                <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n            <td>CustomControl1</td>\r\n            <td>CustomControl1</td>\r\n            <td>Active</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">Edit</button>\r\n                <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n            <td>CustomControl2</td>\r\n            <td>CustomControl2</td>\r\n            <td>Active</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">Edit</button>\r\n                <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n        </tr>\r\n\r\n    </tbody>\r\n</table>";

/***/ }),

/***/ 988:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<h3>\r\n    New control\r\n</h3>  <hr />\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\">\r\n                Name:\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\">\r\n                Title:\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\">\r\n                Upload:\r\n            </label> <div style=\"border: dotted 1px #000; background: #e2e2e2; padding: 25px; text-align: center; font-weight: bold\">\r\n                Select file..\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-success\">Save</button>\r\n            <button class=\"btn btn-default\">Cancel</button>\r\n        </div>\r\n\r\n    </div>\r\n</div>";

/***/ }),

/***/ 989:
/***/ (function(module, exports) {

module.exports = "<div class=\"coreui-portal\">\r\n    <div class=\"coreui-topbar\">\r\n        <div class=\"coreui-topbar-title\">Blade Designer</div>\r\n        <div class=\"coreui-topbar-breadcrumb\"></div>\r\n        <div class=\"coreui-topbar-user\"><span data-bind=\"text: userName\"></span> <i class=\"fa fa-user\"></i></div>\r\n    </div>\r\n    <div class=\"coreui-portal-main\">\r\n        <div class=\"coreui-sidebar\" id=\"mySidenav\">\r\n            <div class=\"coreui-sidebar-bar\">\r\n\r\n\r\n\r\n                <designer-navigation></designer-navigation>\r\n\r\n\r\n              \r\n            </div>\r\n        </div>\r\n\r\n        <div style=\"width: 100%; height: 100%; background: #fff; padding: 20px\">\r\n            \r\n            <router-outlet></router-outlet>\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"coreui-splashscreen\">\r\n    <div class=\"coreui-splashscreen-logo\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"75\" height=\"75\" viewBox=\"0 0 23 23\" overflow=\"hidden\">\r\n                <path d=\"m22.475,11.311033c-4.76,2.630984 -8.641983,6.644968 -11.113964,11.499964c-2.472992,-4.853996 -6.353992,-8.868979 -11.110994,-11.495958l11.113994,-11.118995l11.110964,11.114989l0,0z\"></path>\r\n            </svg>\r\n    </div>\r\n</div>\r\n\r\n@RenderSection(\"scripts\", required: false)\r\n\r\n<script src=\"/bower_components/knockout/dist/knockout.js\"></script>\r\n<script src=\"https://use.fontawesome.com/47fb412963.js\"></script>\r\n<script src=\"/app/app.js\"></script>";

/***/ }),

/***/ 990:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<h3 class=\"pull-left\">\r\n    EDITORS\r\n</h3>\r\n\r\n\r\n<div class=\"clearfix\"></div>\r\n<hr />\r\n\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <th>Name</th>\r\n            <th>Title</th>\r\n            <th>Status</th>\r\n            <th class=\"col-md-1\"></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n\r\n\r\n        <tr>\r\n            <td>TextEditor</td>\r\n            <td>Text Editor</td>\r\n            <td>Active</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">Edit</button>\r\n                <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>PasswordEditor</td>\r\n            <td>Password Editor</td>\r\n            <td>Active</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">Edit</button>\r\n                <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n            <td>DropdownEditor</td>\r\n            <td>DropdownEditor</td>\r\n            <td>Active</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">Edit</button>\r\n                <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>DateTimeEditor</td>\r\n            <td>DateTimeEditor</td>\r\n            <td>Active</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">Edit</button>\r\n                <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n        </tr>\r\n\r\n\r\n        <tr>\r\n            <td>BladePickerSingleEditor</td>\r\n            <td>BladePickerSingleEditor</td>\r\n            <td>Active</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">Edit</button>\r\n                <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>BladePickerMultiple</td>\r\n            <td>BladePickerMultiple</td>\r\n            <td>Active</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">Edit</button>\r\n                <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n        </tr>\r\n\r\n    </tbody>\r\n</table>";

/***/ }),

/***/ 991:
/***/ (function(module, exports) {

module.exports = "\r\n<h3 class=\"pull-left\">\r\n    Forms\r\n</h3>\r\n<div class=\"pull-right\">\r\n    <a [routerLink]=\"['/designer/forms/new']\" class=\"btn btn-success\">\r\n        Add Form\r\n    </a>\r\n</div>\r\n\r\n<div class=\"clearfix\"></div>\r\n<hr />\r\n\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <th>Name</th>\r\n            <th>Title</th>\r\n            <th>Status</th>\r\n            <th class=\"col-md-1\"></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr>\r\n            <td>Form1</td>\r\n            <td>Form #1</td>\r\n            <td>Active</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">Edit</button>\r\n                <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n        </tr>\r\n\r\n        <tr>\r\n            <td>Form2</td>\r\n            <td>Form #2</td>\r\n            <td>Active</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">Edit</button>\r\n                <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td>Form3</td>\r\n            <td>Form #3</td>\r\n            <td>Active</td>\r\n            <td>\r\n                <button class=\"btn btn-primary\">Edit</button>\r\n                <button class=\"btn btn-danger\">Delete</button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>";

/***/ }),

/***/ 992:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<h3 class=\"pull-left\">\r\n    Form #111\r\n</h3>\r\n<div class=\"pull-right\">\r\n    <a class=\"btn btn-success\">\r\n        Save\r\n    </a>\r\n</div>\r\n\r\n<div class=\"clearfix\"></div>\r\n<hr />\r\n\r\n<div class=\"row\">\r\n\r\n    <div class=\"col-md-9\">\r\n\r\n        <div style=\"border: dotted 1px #ccc; padding: 20px; text-align: center; font-weight: bold\">\r\n            Drag a control from the right area\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"col-md-3\">\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\">\r\n                Name:\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\">\r\n                Title:\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\">\r\n                Model:\r\n            </label>\r\n            <select class=\"form-control\">\r\n                <option>---</option>\r\n                <option>SQL Database</option>\r\n                <option>Server</option>\r\n                <option>Location</option>\r\n                <option>Pricing tier</option>\r\n            </select>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"form-group\">\r\n            <div style=\"border: dotted 1px #ccc; padding: 20px; text-align: center; font-weight: bold\">\r\n\r\n                Add behaviour\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <ul class=\"nav nav-tabs\">\r\n            <li class=\"active\">\r\n                <a data-toggle=\"tab\" href=\"#home\">Standard Controls</a>\r\n            </li>\r\n            <li>\r\n                <a data-toggle=\"tab\" href=\"#menu1\">Custom Controls</a>\r\n            </li>\r\n        </ul>\r\n\r\n        <div class=\"tab-content\">\r\n            <div id=\"home\" class=\"tab-pane fade in active\">\r\n                <ul id=\"frmb-1493241358241-control-box\" class=\"frmb-control ui-sortable\">\r\n                    <li class=\"icon-autocomplete input-control input-control-0 ui-sortable-handle\" data-type=\"autocomplete\">\r\n                        <span>Autocomplete</span>\r\n                    </li>\r\n                    <li class=\"icon-button input-control input-control-1 ui-sortable-handle\" data-type=\"button\">\r\n                        <span>Button</span>\r\n                    </li>\r\n                    <li class=\"icon-checkbox-group input-control input-control-2 ui-sortable-handle\" data-type=\"checkbox-group\"><span>Checkbox Group</span></li>\r\n                    <li class=\"icon-date input-control input-control-3 ui-sortable-handle\" data-type=\"date\"><span>Date Field</span></li>\r\n                    <li class=\"icon-file input-control input-control-4 ui-sortable-handle\" data-type=\"file\"><span>File Upload</span></li>\r\n                    <li class=\"icon-header input-control input-control-5 ui-sortable-handle\" data-type=\"header\"><span>Header</span></li>\r\n                    <li class=\"icon-hidden input-control input-control-6 ui-sortable-handle\" data-type=\"hidden\"><span>Hidden Input</span></li>\r\n                    <li class=\"icon-paragraph input-control input-control-7 ui-sortable-handle\" data-type=\"paragraph\"><span>Paragraph</span></li>\r\n                    <li class=\"icon-number input-control input-control-8 ui-sortable-handle\" data-type=\"number\"><span>Number</span></li>\r\n                    <li class=\"icon-radio-group input-control input-control-9 ui-sortable-handle\" data-type=\"radio-group\"><span>Radio Group</span></li>\r\n                    <li class=\"icon-select input-control input-control-10 ui-sortable-handle\" data-type=\"select\"><span>Select</span></li>\r\n                    <li class=\"icon-text input-control input-control-11 ui-sortable-handle\" data-type=\"text\"><span>Text Field</span></li>\r\n                    <li class=\"icon-textarea input-control input-control-12 ui-sortable-handle\" data-type=\"textarea\"><span>Text Area</span></li>\r\n                </ul>\r\n            </div>\r\n            <div id=\"menu1\" class=\"tab-pane fade\">\r\n                <h3>Menu 1</h3>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n</div>";

/***/ }),

/***/ 993:
/***/ (function(module, exports) {

module.exports = "<h3 class=\"pull-left\">\r\n    BLADE DESIGNER\r\n</h3>\r\n\r\n<div class=\"clearfix\"></div>\r\n<hr />\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-2\" style=\"border: dotted 1px #ccc; margin: 10px; padding: 75px; text-align: center; font-weight: bold\">\r\n        <a [routerLink]=\"['/designer/blades']\">Blades</a>\r\n    </div>\r\n    <div class=\"col-md-2\" style=\"border: dotted 1px #ccc; margin: 10px; padding: 75px; text-align: center; font-weight: bold\">\r\n        <a [routerLink]=\"['/designer/controls']\">Controls</a>\r\n    </div>\r\n    <div class=\"col-md-2\" style=\"border: dotted 1px #ccc; margin: 10px; padding: 75px; text-align: center; font-weight: bold\">\r\n        <a [routerLink]=\"['/designer/forms']\">Forms</a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-2\" style=\"border: dotted 1px #ccc; margin: 10px; padding: 75px; text-align: center; font-weight: bold\">\r\n        <a [routerLink]=\"['/designer/models']\">Models</a>\r\n    </div>\r\n    <div class=\"col-md-2\" style=\"border: dotted 1px #ccc; margin: 10px; padding: 75px; text-align: center; font-weight: bold\">\r\n        <a [routerLink]=\"['/designer/editors']\">Editors</a>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 994:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<h3 class=\"pull-left\">\r\n    Models\r\n</h3>\r\n<div class=\"pull-right\">\r\n    <a [routerLink]=\"['/designer/models/new']\" class=\"btn btn-success\">\r\n        Add Model\r\n    </a>\r\n</div>\r\n\r\n<div class=\"clearfix\"></div>\r\n<hr />\r\n\r\n<table class=\"table table-striped\">\r\n    <thead>\r\n    <tr>\r\n        <th>Name</th>\r\n        <th class=\"col-md-1\"></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr>\r\n        <td>Server</td>\r\n        <td>\r\n            <button class=\"btn btn-primary\">Edit</button>\r\n            <button class=\"btn btn-danger\">Delete</button>\r\n        </td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td>Location</td>\r\n        <td>\r\n            <button class=\"btn btn-primary\">Edit</button>\r\n            <button class=\"btn btn-danger\">Delete</button>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>SQL Database</td>\r\n        <td>\r\n            <button class=\"btn btn-primary\">Edit</button>\r\n            <button class=\"btn btn-danger\">Delete</button>\r\n        </td>\r\n    </tr>\r\n    </tbody>\r\n</table>";

/***/ }),

/***/ 995:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<h3>\r\n    New Model\r\n</h3>  <hr />\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\">\r\n                Name:\r\n            </label>\r\n            <input type=\"text\" class=\"form-control\" />\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"control-label\">\r\n                Properties:\r\n            </label>\r\n\r\n\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                <tr>\r\n                    <th>Name</th>\r\n                    <th>Type</th>\r\n                    <th class=\"col-md-2\"></th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr>\r\n                    <td>Title</td>\r\n                    <td>string</td>\r\n                    <td>\r\n                        <button class=\"btn btn-primary\">Edit</button>\r\n                        <button class=\"btn btn-danger\">Delete</button>\r\n                    </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                    <td>Size</td>\r\n                    <td>int</td>\r\n                    <td>\r\n                        <button class=\"btn btn-primary\">Edit</button>\r\n                        <button class=\"btn btn-danger\">Delete</button>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-success\">Save</button>\r\n            <button class=\"btn btn-default\">Cancel</button>\r\n        </div>\r\n\r\n    </div>\r\n</div>";

/***/ }),

/***/ 996:
/***/ (function(module, exports) {

module.exports = "<ul class=\"coreui-sidebar-favourites\">\r\n    <li>\r\n        <a [routerLink]=\"['/designer']\">\r\n            <div class=\"coreui-sidebar-icon\"><i class=\"fa fa-home fa-fw fa-lg\"></i></div>\r\n            <div class=\"coreui-sidebar-label\">Dashboard</div>\r\n        </a>\r\n    </li>\r\n    <li>\r\n        <a [routerLink]=\"['/designer/blades']\">\r\n            <div class=\"coreui-sidebar-icon\"><i class=\"fa fa-list fa-fw fa-lg\"></i></div>\r\n            <div class=\"coreui-sidebar-label\">Blades</div>\r\n        </a>\r\n    </li>\r\n\r\n    <li>\r\n        <a [routerLink]=\"['/designer/controls']\">\r\n            <div class=\"coreui-sidebar-icon\"><i class=\"fa fa-bars fa-fw fa-lg\"></i></div>\r\n            <div class=\"coreui-sidebar-label\">Controls</div>\r\n        </a>\r\n    </li>\r\n\r\n    <li>\r\n        <a [routerLink]=\"['/designer/forms']\">\r\n            <div class=\"coreui-sidebar-icon\"><i class=\"fa fa-ellipsis-h fa-fw fa-lg\"></i></div>\r\n            <div class=\"coreui-sidebar-label\">Forms</div>\r\n        </a>\r\n    </li>\r\n\r\n    <li>\r\n        <a [routerLink]=\"['/designer/models']\">\r\n            <div class=\"coreui-sidebar-icon\"><i class=\"fa fa-ellipsis-h fa-fw fa-lg\"></i></div>\r\n            <div class=\"coreui-sidebar-label\">Models</div>\r\n        </a>\r\n    </li>\r\n\r\n    <li>\r\n        <a [routerLink]=\"['/designer/editors']\">\r\n            <div class=\"coreui-sidebar-icon\"><i class=\"fa fa-ellipsis-h fa-fw fa-lg\"></i></div>\r\n            <div class=\"coreui-sidebar-label\">Editors</div>\r\n        </a>\r\n    </li>\r\n\r\n</ul>";

/***/ })

});
//# sourceMappingURL=1.js.map