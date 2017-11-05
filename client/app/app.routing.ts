import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {MouvementCreateComponent} from "./mouvement-create/mouvement.create.component";
import {MouvementEditComponent} from "./mouvement-edit/mouvement.edit.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'create', component: MouvementCreateComponent ,canActivate: [AuthGuard]},
    { path: 'edit/:id', component: MouvementEditComponent ,canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(appRoutes);