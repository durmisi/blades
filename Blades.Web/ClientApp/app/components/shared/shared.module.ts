import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { SwitchComponent } from './components/switch/switch.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        SwitchComponent
    ],
    exports: [
        SwitchComponent
    ]
})
export class SharedModule { }