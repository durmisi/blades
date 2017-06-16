import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'public', pathMatch: 'full' },
    { path: 'public', loadChildren: './public/public.module#PublicModule' },
    { path: 'designer', loadChildren: './designer/designer.module#DesignerModule' }
];

export const AppRoutes = RouterModule.forRoot(routes);