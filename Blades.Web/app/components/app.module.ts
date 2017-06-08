import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { COMPILER_PROVIDERS } from '@angular/compiler';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { BladeFormsModule } from './forms/blade-forms.module';

import { Configuration } from './app.constants';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        

        AppRoutes,
        SharedModule,
        CoreModule.forRoot(),
        HomeModule,
        BladeFormsModule
    ],

    declarations: [
        AppComponent
    ],

    providers:[
        COMPILER_PROVIDERS
    ],

    bootstrap: [AppComponent]
})

export class AppModule {
}