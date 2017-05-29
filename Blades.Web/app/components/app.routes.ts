import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'blade', loadChildren: './blade/blade.module#BladeModule' },
];

export const AppRoutes = RouterModule.forRoot(routes);
