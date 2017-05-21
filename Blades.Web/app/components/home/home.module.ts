import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';
import { BladeModule } from '../blade/blade.module';
import { HomeRoutes } from './home.routes';
import { HomeComponent } from './components/home.component';

@NgModule({
    imports: [
        NgbModule,
        CommonModule,
        FormsModule,
        HttpModule,
        HomeRoutes,
        SharedModule
    ],

    declarations: [
        HomeComponent
    ],

    exports: [
        HomeComponent
    ]
})
export class HomeModule { }