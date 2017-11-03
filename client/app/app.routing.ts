import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { MouvementComponent } from './mouvement/index';
import { MouvementCreateComponent } from './mouvement-create/index';
import { MouvementEditComponent } from './mouvement-edit/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' },
    { path: 'mouvements', component: MouvementComponent },
    { path: 'mouvement-create', component: MouvementCreateComponent },
    { path: 'mouvement-edit/:id', component: MouvementEditComponent }
];

export const routing = RouterModule.forRoot(appRoutes);