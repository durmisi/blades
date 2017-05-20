import { CustomFooterComponent } from './components/customfooter/customfooter.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],

    declarations: [
        MainNavComponent,
        CustomFooterComponent
    ],

    exports: [
        MainNavComponent,
        CustomFooterComponent
    ]
})

export class SharedModule {
    
}