import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'designer', loadChildren: './designer/designer.module#DesignerModule' },
    { path: 'blade', loadChildren: './blade/blade.module#BladeModule' },
];

export const AppRoutes = RouterModule.forRoot(routes);
