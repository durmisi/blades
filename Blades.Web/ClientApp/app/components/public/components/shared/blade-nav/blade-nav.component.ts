import { Component, OnInit } from '@angular/core';
import { Blade } from '../../../../blades/models';

@Component({
    selector: 'blade-nav',
    templateUrl: 'blade-nav.component.html'
})
export class BladeNavComponent implements OnInit {
    private blades: Array<Blade>;


    ngOnInit(): void {
        this.blades = new Array<Blade>();

        let b = new Blade();
        b.name = 'Explore';
        b.title = 'Explore';
        b.iconClass = 'fa fa-search fa-fw fa-lg';
        this.blades.push(b);

        b = new Blade();
        b.name = 'Visualize';
        b.title = 'Visualize';
        b.iconClass = 'fa fa-sitemap fa-fw fa-lg';
        this.blades.push(b);

        b = new Blade();
        b.name = 'Settings';
        b.title = 'Settings';
        b.iconClass = 'fa fa-cogs fa-fw fa-lg';
        this.blades.push(b);

        b = new Blade();
        b.name = 'More applications';
        b.title = 'More applications';
        b.iconClass = 'fa fa-ellipsis-h fa-fw fa-lg';
        this.blades.push(b);
    }
}