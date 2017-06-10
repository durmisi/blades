import { Component } from '@angular/core';

@Component({
    selector: 'designer-component',
    templateUrl: 'designer.component.html'
})

export class DesignerComponent {

    public message: string;

    constructor() {
        this.message = 'Hello from DesignerComponent constructor';
    }
}
