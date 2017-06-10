//angular modules (shared)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//app components
import { AppComponent } from './app.component'
import { AppRoutes } from './app.routes';

//app modules
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { BladeFormsModule } from './forms/blade-forms.module';

export const sharedConfig: NgModule = {
    imports: [
        CommonModule,
        AppRoutes,
        SharedModule,
        CoreModule.forRoot(),
        HomeModule,
        BladeFormsModule
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [
        AppComponent
    ]
};