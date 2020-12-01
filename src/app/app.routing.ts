import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home';
import { Events } from './events';
import { Todo } from './todo';
// import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: Events },
    { path: 'events', component: Events },
    { path: 'todos', component: Todo },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);