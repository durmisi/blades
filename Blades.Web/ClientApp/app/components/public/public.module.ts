import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridsterModule } from 'angular-gridster2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DevExtremeModule } from 'devextreme-angular';

import { PublicRoutes } from './public.routes';
import { PublicComponents } from './public.routes'; 

@NgModule({
    imports: [
        CommonModule,
        GridsterModule,

        NgbModule.forRoot(),
        DevExtremeModule,

        PublicRoutes
    ],
    declarations: [
        ...PublicComponents
    ]
})

export class PublicModule { }