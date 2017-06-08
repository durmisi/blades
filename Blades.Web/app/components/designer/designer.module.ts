import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignerRoutes } from './designer.routes';
import { DesignerComponent } from './components/designer.component';

@NgModule({
    imports: [
        CommonModule,
        DesignerRoutes
    ],

    declarations: [
        DesignerComponent
    ]
})

export class DesignerModule { }