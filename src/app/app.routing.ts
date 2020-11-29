import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { Events } from './events';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: Events },
    { path: 'events', component: Events },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);