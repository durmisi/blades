import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BladeFormComponent} from './components/blade-form/blade-form.component';

@NgModule({
    imports: [
        CommonModule,
    ],

    declarations: [
     BladeFormComponent
    ],

    exports: [
     BladeFormComponent
    ]
})
export class BladeFormsModule {}