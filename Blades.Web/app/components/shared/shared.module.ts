import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomFooterComponent } from './components/customfooter/customfooter.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { BladeNavComponent } from './components/blade-nav/blade-nav.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],

    declarations: [
        MainNavComponent,
        CustomFooterComponent,
        BladeNavComponent
    ],

    exports: [
        MainNavComponent,
        CustomFooterComponent,
        BladeNavComponent
    ]
})
export class SharedModule {}