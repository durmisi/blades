import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignerRoutes } from './designer.routes';
import { DesignerComponents } from './designer.routes';

import { NavigationComponent } from './components/navigation.component';

@NgModule({
    imports: [
        CommonModule,
        DesignerRoutes
    ],

    declarations: [
        NavigationComponent,
        ...DesignerComponents
    ]
})

export class DesignerModule { }