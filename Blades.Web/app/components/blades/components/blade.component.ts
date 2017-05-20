import { Component } from '@angular/core';

@Component({
    selector: 'blade',
    templateUrl: 'blade.component.html'
})

export class BladeComponent {

    public message: string;

    constructor() {
        this.message = 'Hello from BladeComponent constructor';
    }
}
