import { BladeComponent } from './components/blade.component';
import { BladeNavComponent } from './components/blade-nav.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],

    declarations: [
        BladeComponent,
        BladeNavComponent
    ],

    exports: [
        BladeComponent,
        BladeNavComponent
    ]
})

export class BladesModule {
    
}