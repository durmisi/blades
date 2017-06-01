import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Blade, BladeLayout, BladeSize, OpenLinkCommand } from '../../models/models';



@Component({
    selector: 'blade-details',
    templateUrl: 'blade-details.component.html'
})
export class BladeDetailsComponent implements OnInit, OnDestroy {

    private bladeName: string;
    private sub: any;
    private activeBlades: Blade[];


 myForm: FormGroup;

    constructor(private route: ActivatedRoute,private formBuilder: FormBuilder) {

    }

    ngOnInit() {

   this.myForm = this.formBuilder.group({
      mySwitch: [true]
    });

        this.sub = this.route.params.subscribe(params => {
            this.bladeName = params['name'];

            this.activeBlades = new Array<Blade>();

            if (this.bladeName === 'Explore') {
                let blade = new Blade();
                blade.title = this.bladeName;
                blade.subTitle = this.bladeName;
                blade.bladeSize = BladeSize.Small;
                blade.bladeLayout = BladeLayout.OneColumn;
                blade.bladeCommands.push(new OpenLinkCommand('Open Google', 'http://www.google.com'));
                this.activeBlades.push(blade);
            }

            if (this.bladeName === 'Visualize') {
                let blade = new Blade();
                blade.title = this.bladeName;
                blade.subTitle = this.bladeName;
                blade.bladeSize = BladeSize.Medium;
                blade.bladeLayout = BladeLayout.TwoColumns;
                blade.bladeCommands.push(new OpenLinkCommand('Open Google', 'http://www.google.com'));
                this.activeBlades.push(blade);
            }

            if (this.bladeName === 'Settings') {
                let blade = new Blade();
                blade.title = this.bladeName;
                blade.subTitle = this.bladeName;
                blade.bladeSize = BladeSize.Large;
                blade.bladeLayout = BladeLayout.ThreeColumns;
                blade.bladeCommands.push(new OpenLinkCommand('Open Google', 'http://www.google.com'));
                this.activeBlades.push(blade);
            }
        });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    expandBlade(blade: Blade) {
        blade.fullScreenMode = !blade.fullScreenMode;
    }

    removeBlade(blade: Blade) {
        let index = this.activeBlades.indexOf(blade);
        if (index > -1) {
            this.activeBlades.splice(index, 1);
        }
    }

    getClass(blade: Blade): string {
        if (blade.fullScreenMode) {
            return 'blade_full_screen';
        }

        switch (blade.bladeSize) {
            case BladeSize.Small:
                return 'blade-size-small';
            case BladeSize.Medium:
                return 'blade-size-medium';
            case BladeSize.Large:
                return 'blade-size-large';
            case BladeSize.XLarge:
                return 'blade-size-xlarge';
        }
        return '';
    }
}