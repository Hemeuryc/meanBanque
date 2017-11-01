import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { MouvementService} from './mouvement.service';
import { MouvementComponent } from './mouvement/mouvement.component';
import { MenuComponent } from './menu/menu.component';
import { MouvementCreateComponent } from './mouvement-create/mouvement-create.component';
import { MouvementEditComponent } from './mouvement-edit/mouvement-edit.component';

const ROUTES = [
  { path: '', redirectTo: 'mouvements', pathMatch: 'full' },
  { path: 'mouvements', component: MouvementComponent },
  { path: 'mouvement-create', component: MouvementCreateComponent },
  { path: 'mouvement-edit/:id', component: MouvementEditComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MouvementComponent,
    MenuComponent,
    MouvementCreateComponent,
    MouvementEditComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpModule,              // <-Add HttpModule
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MouvementService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}], // <-Add DataService
  bootstrap: [AppComponent]
})
export class AppModule { }
