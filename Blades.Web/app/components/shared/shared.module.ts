import { CustomFooterComponent } from './components/customfooter/customfooter.component';
import { TopNavigationComponent } from './components/navigation/topnavigation.component';
import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],

    declarations: [
        TopNavigationComponent,
        CustomFooterComponent
    ],

    exports: [
        TopNavigationComponent,
        CustomFooterComponent
    ]
})

export class SharedModule { }