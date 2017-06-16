import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './components/public.component';
import { MainNavComponent } from './components/shared/main-nav/main-nav.component';
import { BladeNavComponent } from './components/shared/blade-nav/blade-nav.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { BladeDetailsComponent } from './components/blades/blade-details.component';

const routes: Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'about', component: AboutComponent},
            { path: 'blade/:name', component: BladeDetailsComponent }
        ]
    }
];

export const PublicRoutes = RouterModule.forChild(routes);
export const PublicComponents = [
    PublicComponent,
    HomeComponent,
    AboutComponent,
    MainNavComponent,
    BladeNavComponent,
    BladeDetailsComponent
];