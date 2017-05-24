import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blade } from '../../core/models';

@Component({
    selector: 'blade-details',
    templateUrl: 'blade-details.component.html'
})
export class BladeDetailsComponent implements OnInit, OnDestroy {

    private bladeName: string;
    private sub: any;
    private activeBlades: Blade[];

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.bladeName = params['name'];

            this.activeBlades = new Array<Blade>();

            let blade = new Blade();
            blade.title = this.bladeName;
            blade.subTitle = this.bladeName;
            blade.class = 'blade-size-medium';
            this.activeBlades.push(blade);

            blade = new Blade();
            blade.title = this.bladeName;
            blade.subTitle = this.bladeName;
            blade.class = 'blade-size-small';
            this.activeBlades.push(blade);

        });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    expandBlade(blade: Blade) {
        if (blade.fullScreenClass == null)
            blade.fullScreenClass = 'blade_full_screen';
        else
            blade.fullScreenClass = null;
    }
    removeBlade(blade: Blade) {
        let index = this.activeBlades.indexOf(blade);
        if (index > -1) {
            this.activeBlades.splice(index, 1);
        }
    }
}