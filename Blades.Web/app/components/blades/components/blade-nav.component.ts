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
        b.name = 'Dashboard';
        b.title = 'Dashboard';
        b.class = 'fa fa-home fa-fw fa-lg';
        this.blades.push(b);

        b = new Blade();
        b.name = 'Explore';
        b.title = 'Explore';
        b.class = 'fa fa-search fa-fw fa-lg';
        this.blades.push(b);

        b = new Blade();
        b.name = 'Visualize';
        b.title = 'Visualize';
        b.class = 'fa fa-sitemap fa-fw fa-lg';
        this.blades.push(b);

        b = new Blade();
        b.name = 'Settings';
        b.title = 'Settings';
        b.class = 'fa fa-cogs fa-fw fa-lg';
        this.blades.push(b);

        b = new Blade();
        b.name = 'More applications';
        b.title = 'More applications';
        b.class = 'fa fa-ellipsis-h fa-fw fa-lg';
        this.blades.push(b);
    }
}


export class Blade {
    public name: string;
    public title: string;
    public class: string;
}