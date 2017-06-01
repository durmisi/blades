import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';


import { CustomFooterComponent } from './components/customfooter/customfooter.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { BladeNavComponent } from './components/blade-nav/blade-nav.component';
import { DropdownPickerSingleComponent } from './components/dropdown-picker-single/dropdown-picker-single.component';


//import 'ng2-select.css';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        SelectModule
    ],

    declarations: [
        MainNavComponent,
        CustomFooterComponent,
        BladeNavComponent,
        DropdownPickerSingleComponent
    ],

    exports: [
        MainNavComponent,
        CustomFooterComponent,
        BladeNavComponent,
        DropdownPickerSingleComponent
    ]
})
export class SharedModule {}