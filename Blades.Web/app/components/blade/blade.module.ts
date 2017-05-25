import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { BladeRoutes } from './blade.routes';
import { BladeDetailsComponent } from './components/blade-details.component';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        BladeRoutes
    ],
    declarations: [
        BladeDetailsComponent
    ]
})
export class BladeModule { }