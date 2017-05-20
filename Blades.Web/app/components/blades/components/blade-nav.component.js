var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var BladeNavComponent = (function () {
    function BladeNavComponent() {
    }
    BladeNavComponent.prototype.ngOnInit = function () {
        this.blades = new Array();
        var b = new Blade();
        b.name = "test";
        this.blades.push(b);
    };
    return BladeNavComponent;
}());
BladeNavComponent = __decorate([
    Component({
        selector: 'blade-nav',
        templateUrl: 'blade-nav.component.html'
    }),
    __metadata("design:paramtypes", [])
], BladeNavComponent);
export { BladeNavComponent };
var Blade = (function () {
    function Blade() {
    }
    return Blade;
}());
export { Blade };
//# sourceMappingURL=blade-nav.component.js.map