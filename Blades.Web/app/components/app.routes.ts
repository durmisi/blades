import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'blade', loadChildren: './blades/blades.module#BladesModule' }
];

export const AppRoutes = RouterModule.forRoot(routes);
