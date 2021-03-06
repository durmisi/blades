exports.ids = [2];
exports.modules = {

/***/ 1005:
/***/ (function(module, exports) {

module.exports = "<div class=\"coreui-portal\">\r\n    <main-nav></main-nav>\r\n    <div class=\"coreui-portal-main\">\r\n        <blade-nav class=\"coreui-sidebar coreui-sidebar-is-collapsed\"></blade-nav>\r\n        <div class=\"coreui-portal-content\">\r\n            <div class=\"coreui-blade-layout\">\r\n                <div *ngFor=\"let blade of activeBlades;\">\r\n                    <div class=\"blade {{getClass(blade)}}\">\r\n                        <div class=\"blade-header\">\r\n\r\n                            <div class=\"blade-header-title\">\r\n                                <h2>{{blade.title}}</h2>\r\n                                <h3>{{blade.subTitle}}</h3>\r\n                            </div>\r\n\r\n                            <div class=\"blade-actions\">\r\n                                <button title=\"Expand\" type=\"button\" (click)=\"expandBlade(blade)\">\r\n                                    <i class=\"fa fa-expand fa-lg\"></i>\r\n                                </button>\r\n                                <button title=\"Close\" type=\"button\" (click)=\"removeBlade(blade)\">\r\n                                    <i class=\"fa fa-close fa-lg\"></i>\r\n                                </button>\r\n                            </div>\r\n\r\n                            <div class=\"blade-commands\">\r\n                                <button type=\"button\" *ngFor=\"let bladeCommand of blade.bladeCommands;\" (click)=\"bladeCommand.execute()\">\r\n                                    <i class=\"fa fa-lg\" data-bind=\"css: icon\"></i>\r\n                                    <span>{{bladeCommand.title}}</span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"blade-content-wrapper\" style=\"padding: 15px\">\r\n\r\n                            <div class=\"row\" *ngIf=\"blade.bladeLayout==1\">\r\n                                <div class=\"col-md-12\">\r\n                                    //data-bind=\"dynamicHtml: content\" {{blade.title}}\r\n\r\n                                    <blade-form [formId]=\"123\"></blade-form>\r\n\r\n                                    <!--<dropdown-picker-single></dropdown-picker-single>\r\n\r\n\r\n\r\n<h3>Reactive Forms</h3>\r\n<form [formGroup]=\"myForm\" (ngSubmit)=\"submit()\">\r\n  <app-switch formControlName=\"mySwitch\" [label]=\"'My Switch'\"></app-switch>\r\n  <button>Submit</button>\r\n</form>-->\r\n\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\" *ngIf=\"blade.bladeLayout==2\">\r\n                                <div class=\"col-md-6\">\r\n                                    //data-bind=\"dynamicHtml: content\" {{blade.title}}\r\n                                </div>\r\n\r\n                                <div class=\"col-md-6\">\r\n                                    //data-bind=\"dynamicHtml: content\" {{blade.title}}\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\" *ngIf=\"blade.bladeLayout==3\">\r\n                                <div class=\"col-md-4\">\r\n                                    //data-bind=\"dynamicHtml: content\" {{blade.title}}\r\n                                </div>\r\n\r\n                                <div class=\"col-md-4\">\r\n                                    //data-bind=\"dynamicHtml: content\" {{blade.title}}\r\n                                </div>\r\n\r\n                                <div class=\"col-md-4\">\r\n                                    //data-bind=\"dynamicHtml: content\" {{blade.title}}\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Blade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BladeLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BladeSize; });
/* unused harmony export BladeCommand */
/* unused harmony export OpenBladeCommand */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OpenLinkCommand; });
/* unused harmony export PublishEventCommand */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Blade = (function () {
    function Blade() {
        this.fullScreenMode = false;
        this.bladeSize = BladeSize.Medium;
        this.bladeLayout = BladeLayout.OneColumn;
        this.bladeCommands = new Array();
    }
    return Blade;
}());

var BladeLayout;
(function (BladeLayout) {
    BladeLayout[BladeLayout["OneColumn"] = 1] = "OneColumn";
    BladeLayout[BladeLayout["TwoColumns"] = 2] = "TwoColumns";
    BladeLayout[BladeLayout["ThreeColumns"] = 3] = "ThreeColumns";
})(BladeLayout || (BladeLayout = {}));
var BladeSize;
(function (BladeSize) {
    BladeSize[BladeSize["Small"] = 1] = "Small";
    BladeSize[BladeSize["Medium"] = 2] = "Medium";
    BladeSize[BladeSize["Large"] = 3] = "Large";
    BladeSize[BladeSize["XLarge"] = 4] = "XLarge";
    BladeSize[BladeSize["FullScreen"] = 5] = "FullScreen";
})(BladeSize || (BladeSize = {}));
var BladeCommand = (function () {
    function BladeCommand(title) {
        this.title = title;
    }
    return BladeCommand;
}());

var OpenBladeCommand = (function (_super) {
    __extends(OpenBladeCommand, _super);
    function OpenBladeCommand(title, bladeName) {
        var _this = _super.call(this, title) || this;
        _this.bladeName = bladeName;
        return _this;
    }
    OpenBladeCommand.prototype.execute = function () { throw new Error('Not implemented'); };
    return OpenBladeCommand;
}(BladeCommand));

var OpenLinkCommand = (function (_super) {
    __extends(OpenLinkCommand, _super);
    function OpenLinkCommand(title, link) {
        var _this = _super.call(this, title) || this;
        _this.link = link;
        return _this;
    }
    OpenLinkCommand.prototype.execute = function () {
        window.location.href = this.link;
    };
    return OpenLinkCommand;
}(BladeCommand));

var PublishEventCommand = (function (_super) {
    __extends(PublishEventCommand, _super);
    function PublishEventCommand(title, event) {
        var _this = _super.call(this, title) || this;
        _this.event = event;
        return _this;
    }
    PublishEventCommand.prototype.execute = function () { throw new Error('Not implemented'); };
    return PublishEventCommand;
}(BladeCommand));



/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BladeDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_models__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BladeDetailsComponent = (function () {
    function BladeDetailsComponent(route, formBuilder) {
        this.route = route;
        this.formBuilder = formBuilder;
    }
    BladeDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = this.formBuilder.group({
            mySwitch: [true]
        });
        this.sub = this.route.params.subscribe(function (params) {
            _this.bladeName = params['name'];
            _this.activeBlades = new Array();
            if (_this.bladeName === 'Explore') {
                var blade = new __WEBPACK_IMPORTED_MODULE_3__models_models__["a" /* Blade */]();
                blade.title = _this.bladeName;
                blade.subTitle = _this.bladeName;
                blade.bladeSize = __WEBPACK_IMPORTED_MODULE_3__models_models__["b" /* BladeSize */].Large;
                blade.bladeLayout = __WEBPACK_IMPORTED_MODULE_3__models_models__["c" /* BladeLayout */].OneColumn;
                blade.bladeCommands.push(new __WEBPACK_IMPORTED_MODULE_3__models_models__["d" /* OpenLinkCommand */]('Open Google', 'http://www.google.com'));
                _this.activeBlades.push(blade);
            }
            if (_this.bladeName === 'Visualize') {
                var blade = new __WEBPACK_IMPORTED_MODULE_3__models_models__["a" /* Blade */]();
                blade.title = _this.bladeName;
                blade.subTitle = _this.bladeName;
                blade.bladeSize = __WEBPACK_IMPORTED_MODULE_3__models_models__["b" /* BladeSize */].Medium;
                blade.bladeLayout = __WEBPACK_IMPORTED_MODULE_3__models_models__["c" /* BladeLayout */].TwoColumns;
                blade.bladeCommands.push(new __WEBPACK_IMPORTED_MODULE_3__models_models__["d" /* OpenLinkCommand */]('Open Google', 'http://www.google.com'));
                _this.activeBlades.push(blade);
            }
            if (_this.bladeName === 'Settings') {
                var blade = new __WEBPACK_IMPORTED_MODULE_3__models_models__["a" /* Blade */]();
                blade.title = _this.bladeName;
                blade.subTitle = _this.bladeName;
                blade.bladeSize = __WEBPACK_IMPORTED_MODULE_3__models_models__["b" /* BladeSize */].Large;
                blade.bladeLayout = __WEBPACK_IMPORTED_MODULE_3__models_models__["c" /* BladeLayout */].ThreeColumns;
                blade.bladeCommands.push(new __WEBPACK_IMPORTED_MODULE_3__models_models__["d" /* OpenLinkCommand */]('Open Google', 'http://www.google.com'));
                _this.activeBlades.push(blade);
            }
        });
    };
    BladeDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    BladeDetailsComponent.prototype.expandBlade = function (blade) {
        blade.fullScreenMode = !blade.fullScreenMode;
    };
    BladeDetailsComponent.prototype.removeBlade = function (blade) {
        var index = this.activeBlades.indexOf(blade);
        if (index > -1) {
            this.activeBlades.splice(index, 1);
        }
    };
    BladeDetailsComponent.prototype.getClass = function (blade) {
        if (blade.fullScreenMode) {
            return 'blade_full_screen';
        }
        switch (blade.bladeSize) {
            case __WEBPACK_IMPORTED_MODULE_3__models_models__["b" /* BladeSize */].Small:
                return 'blade-size-small';
            case __WEBPACK_IMPORTED_MODULE_3__models_models__["b" /* BladeSize */].Medium:
                return 'blade-size-medium';
            case __WEBPACK_IMPORTED_MODULE_3__models_models__["b" /* BladeSize */].Large:
                return 'blade-size-large';
            case __WEBPACK_IMPORTED_MODULE_3__models_models__["b" /* BladeSize */].XLarge:
                return 'blade-size-xlarge';
        }
        return '';
    };
    return BladeDetailsComponent;
}());
BladeDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blade-details',
        template: __webpack_require__(1005)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
], BladeDetailsComponent);



/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BladeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_blade_details_component__ = __webpack_require__(368);


var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: ':name', component: __WEBPACK_IMPORTED_MODULE_1__components_blade_details_component__["a" /* BladeDetailsComponent */] }
];
var BladeRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild(routes);


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BladeModule", function() { return BladeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_blade_forms_module__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blade_routes__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_blade_details_component__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BladeModule = (function () {
    function BladeModule() {
    }
    return BladeModule;
}());
BladeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__forms_blade_forms_module__["a" /* BladeFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__blade_routes__["a" /* BladeRoutes */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__components_blade_details_component__["a" /* BladeDetailsComponent */]
        ]
    })
], BladeModule);



/***/ })

};;
//# sourceMappingURL=2.js.map