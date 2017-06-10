import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';


import { CustomFooterComponent } from './components/customfooter/customfooter.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { BladeNavComponent } from './components/blade-nav/blade-nav.component';
import { SwitchComponent } from './components/switch/switch.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],

    declarations: [
        MainNavComponent,
        CustomFooterComponent,
        BladeNavComponent,
        SwitchComponent
    ],

    exports: [
        MainNavComponent,
        CustomFooterComponent,
        BladeNavComponent,
        SwitchComponent
    ]
})
export class SharedModule { }