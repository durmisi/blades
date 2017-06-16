import { Routes, RouterModule } from '@angular/router';

import { DesignerComponent } from './components/designer.component';
import { HomeComponent } from './components/home.component';

import { BladesComponent } from './components/blades/blades.component';
import { NewBladeComponent } from './components/blades/new-blade.component';

import { ControlsComponent } from './components/controls/controls.component';
import { NewControlComponent } from './components/controls/new-control.component';

import { FormsComponent } from './components/forms/forms.component';
import { NewFormComponent } from './components/forms/new-form.component';

import { ModelsComponent } from './components/models/models.component';
import { NewModelComponent } from './components/models/new-model.component';

import { EditorsComponent } from './components/editors/editors.component';

const routes: Routes = [
    {
        path: '',
        component: DesignerComponent,
        children: [
            { path: '', component: HomeComponent },

            { path: 'blades', component: BladesComponent },
            { path: 'blades/new', component: NewBladeComponent },

            { path: 'controls', component: ControlsComponent },
            { path: 'controls/new', component: NewControlComponent },

            { path: 'forms', component: FormsComponent },
            { path: 'forms/new', component: NewFormComponent },

            { path: 'models', component: ModelsComponent },
            { path: 'models/new', component: NewModelComponent },

            { path: 'editors', component: EditorsComponent }
        ]
    }
];

export const DesignerRoutes = RouterModule.forChild(routes);
export const DesignerComponents = [
    DesignerComponent,
    HomeComponent,
    BladesComponent,
    ControlsComponent,
    FormsComponent,
    ModelsComponent,
    EditorsComponent,
    NewBladeComponent,
    NewControlComponent,
    NewFormComponent,
    NewModelComponent
];