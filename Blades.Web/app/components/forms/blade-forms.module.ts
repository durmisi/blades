import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsService } from './services/forms.service';
import { BladeFormComponent } from './components/blade-form/blade-form.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],

    declarations: [
         BladeFormComponent
    ],

    exports: [
         BladeFormComponent
    ],
    providers:[FormsService]
})
export class BladeFormsModule {}