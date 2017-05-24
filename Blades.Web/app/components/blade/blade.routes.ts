import { Routes, RouterModule } from '@angular/router';
import { BladeDetailsComponent } from './components/blade-details.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: ':name', component: BladeDetailsComponent }
];

export const BladeRoutes = RouterModule.forChild(routes);