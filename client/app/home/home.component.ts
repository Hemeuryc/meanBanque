import { Component, OnInit } from '@angular/core';

import { User, Mouvement } from '../_models/index';
import {AlertService , UserService , MouvementService, AuthenticationService } from '../_services/index';
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    private _listeFilter: string ;
    mouvements : any;
    filteredMouvements :  any;
    filteredFuturMouvements : any;



    ngOnInit() {
        this.loadAllUsers();
        this.loadAllMouvements();

    }

    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }

    deleteMouvement(_id: string) {
        this.mouvementService.delete(_id)
            .subscribe(
                data => {
                    this.filteredMouvements = [];
                    this.filteredFuturMouvements = [];
                    this.loadAllMouvements();
                    this.alertService.success('Suppression du mouvement réussie', true);
                },
                error => {
                    this.alertService.error(error);
                });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    private loadAllMouvements() {

      this.mouvementService.getAllMouvement()
          .subscribe(mouvements => {
                            let today = new Date();
                            this.mouvements = mouvements;
                            this.mouvements = this.mouvements.filter((mouvement: any) =>
                                mouvement.user_id == this.currentUser._id);
                            this.filteredMouvements = this.mouvements.filter((mouvement: any) =>
                                new Date(mouvement.date).valueOf() < today.valueOf());
                             this.filteredFuturMouvements = this.mouvements.filter((mouvement: any) =>
                                   new Date(mouvement.date).valueOf() > today.valueOf());

                         });

    }


    refreshFuturMouvements(){
        let today = new Date();
        return this.filteredFuturMouvements = this.mouvements.filter((mouvement: any) =>
            new Date(mouvement.date).valueOf() > today.valueOf());
    }

    refreshMouvements(){
        let today = new Date();
        return this.filteredMouvements = this.mouvements.filter((mouvement: any) =>
            new Date(mouvement.date).valueOf() < today.valueOf());
    }

    get listeFilter(): string {
        return this._listeFilter;
    }
    set listeFilter(value: string) {
        this._listeFilter = value;
        this.filteredFuturMouvements = this.listeFilter ? this.performFuturFilter(this.listeFilter) : this.refreshFuturMouvements();
        this.filteredMouvements = this.listeFilter ? this.performFilter(this.listeFilter) : this.refreshMouvements();
    }

    performFuturFilter(filterBy: string): any {
        filterBy =  filterBy.toLocaleLowerCase();
        return this.filteredFuturMouvements.filter((mouvement: any) =>
            mouvement.intitule.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    performFilter(filterBy: string): any {
        filterBy =  filterBy.toLocaleLowerCase();
        return this.filteredMouvements.filter((mouvement: any) =>
            mouvement.intitule.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    constructor(private userService: UserService, private mouvementService: MouvementService,  private alertService: AlertService, private authentificationService: AuthenticationService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    }

    logout()
    {
        this.authentificationService.logout();
    }
}