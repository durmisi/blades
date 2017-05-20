import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'blade-nav',
    templateUrl: 'blade-nav.component.html'
})
export class BladeNavComponent implements OnInit {
    private blades: Array<Blade>;

    constructor() {

    }

    ngOnInit(): void {
        this.blades = new Array<Blade>();

        let b = new Blade();
        b.name = "test";

        this.blades.push(b);
    }
}


export class Blade {
    public name: string;
}
