import { Routes, RouterModule } from '@angular/router';

import { BladeComponent } from './components/blade.component';

const routes: Routes = [
    { path: '', component: BladeComponent }
];

export const BladeRoutes = RouterModule.forChild(routes);