//angular modules (client)
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { COMPILER_PROVIDERS } from '@angular/compiler';

//app
import { sharedConfig } from './app.module.shared';
import { AppConfig } from './app.config';

@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        ...sharedConfig.imports
    ],
    providers: [
        AppConfig,
        COMPILER_PROVIDERS
    ]
})
export class AppModule {
}