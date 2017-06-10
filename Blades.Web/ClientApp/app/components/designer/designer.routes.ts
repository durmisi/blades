import { Routes, RouterModule } from '@angular/router';
import { DesignerComponent } from './components/designer.component';

const routes: Routes = [
    { path: '', component: DesignerComponent }
];

export const DesignerRoutes = RouterModule.forChild(routes);