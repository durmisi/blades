webpackJsonp([0],{

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignerModule", function() { return DesignerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__designer_routes__ = __webpack_require__(1017);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_designer_component__ = __webpack_require__(1015);
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
            __WEBPACK_IMPORTED_MODULE_3__components_designer_component__["a" /* DesignerComponent */]
        ]
    })
], DesignerModule);



/***/ }),

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
        this.message = 'Hello from DesignerComponent constructor';
    }
    return DesignerComponent;
}());
DesignerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'designer-component',
        template: __webpack_require__(1019)
    }),
    __metadata("design:paramtypes", [])
], DesignerComponent);



/***/ }),

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesignerRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_designer_component__ = __webpack_require__(1015);


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_designer_component__["a" /* DesignerComponent */] }
];
var DesignerRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 1019:
/***/ (function(module, exports) {

module.exports = "<div class=\"coreui-portal\">\r\n    <div class=\"coreui-topbar\">\r\n        <div class=\"coreui-topbar-title\">Blade Designer</div>\r\n        <div class=\"coreui-topbar-breadcrumb\"></div>\r\n        <div class=\"coreui-topbar-user\"><span data-bind=\"text: userName\"></span> <i class=\"fa fa-user\"></i></div>\r\n    </div>\r\n    <div class=\"coreui-portal-main\">\r\n        <div class=\"coreui-sidebar\" id=\"mySidenav\">\r\n            <div class=\"coreui-sidebar-bar\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n                <ul class=\"coreui-sidebar-favourites\">\r\n                    <li>\r\n                        <a href=\"/Designer\">\r\n                            <div class=\"coreui-sidebar-icon\"><i class=\"fa fa-home fa-fw fa-lg\"></i></div>\r\n                            <div class=\"coreui-sidebar-label\">Dashboard</div>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"/Designer/Blades\">\r\n                            <div class=\"coreui-sidebar-icon\"><i class=\"fa fa-list fa-fw fa-lg\"></i></div>\r\n                            <div class=\"coreui-sidebar-label\">Blades</div>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li>\r\n                        <a href=\"/Designer/Controls\">\r\n                            <div class=\"coreui-sidebar-icon\"><i class=\"fa fa-bars fa-fw fa-lg\"></i></div>\r\n                            <div class=\"coreui-sidebar-label\">Controls</div>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li>\r\n                        <a href=\"/Designer/Forms\">\r\n                            <div class=\"coreui-sidebar-icon\"><i class=\"fa fa-ellipsis-h fa-fw fa-lg\"></i></div>\r\n                            <div class=\"coreui-sidebar-label\">Forms</div>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li>\r\n                        <a href=\"/Designer/Models\">\r\n                            <div class=\"coreui-sidebar-icon\"><i class=\"fa fa-ellipsis-h fa-fw fa-lg\"></i></div>\r\n                            <div class=\"coreui-sidebar-label\">Models</div>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li>\r\n                        <a href=\"/Designer/Editors\">\r\n                            <div class=\"coreui-sidebar-icon\"><i class=\"fa fa-ellipsis-h fa-fw fa-lg\"></i></div>\r\n                            <div class=\"coreui-sidebar-label\">Editors</div>\r\n                        </a>\r\n                    </li>\r\n\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div style=\"width: 100%; height: 100%; background: #fff; padding: 20px\">\r\n\r\n            //BODY GOES HERE\r\n            <router-outlet></router-outlet>\r\n\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"coreui-splashscreen\">\r\n    <div class=\"coreui-splashscreen-logo\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"75\" height=\"75\" viewBox=\"0 0 23 23\" overflow=\"hidden\">\r\n                <path d=\"m22.475,11.311033c-4.76,2.630984 -8.641983,6.644968 -11.113964,11.499964c-2.472992,-4.853996 -6.353992,-8.868979 -11.110994,-11.495958l11.113994,-11.118995l11.110964,11.114989l0,0z\"></path>\r\n            </svg>\r\n    </div>\r\n</div>\r\n\r\n@RenderSection(\"scripts\", required: false)\r\n\r\n<script src=\"/bower_components/knockout/dist/knockout.js\"></script>\r\n<script src=\"https://use.fontawesome.com/47fb412963.js\"></script>\r\n<script src=\"/app/app.js\"></script>";

/***/ })

});
//# sourceMappingURL=0.js.map