//angular modules (shared)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//app components
import { AppComponent } from './app.component'
import { AppRoutes } from './app.routes';

//app modules
import { SharedModule } from './shared/shared.module';
import { BladesModule } from './blades/blades.module';
import { BladeFormsModule } from './forms/blade-forms.module';

export const sharedConfig: NgModule = {
    imports: [
        CommonModule,
        AppRoutes,
        BladesModule,
        SharedModule,
        BladeFormsModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
};