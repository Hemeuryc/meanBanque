import { Component, OnInit } from '@angular/core';

import { User, Mouvement } from '../_models/index';
import { UserService , MouvementService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    private _listeFilter: string ;
    mouvements : Mouvement[] = [];
    filteredMouvements :  Mouvement[] = [];



    ngOnInit() {
        this.loadAllUsers();
        this.loadAllMouvements();

        this.filteredMouvements = this.mouvements;
    }

    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    private loadAllMouvements() {
      this.mouvementService.getAllMouvement().subscribe(mouvements => { this.filteredMouvements = mouvements; });
    }

    get listeFilter(): string {
        return this._listeFilter;
    }
    set listeFilter(value: string) {
        this._listeFilter = value;
        this.filteredMouvements = this.listeFilter ? this.performFilter(this.listeFilter) : this.mouvements;
    }

    performFilter(filterBy: string): any {
        filterBy =  filterBy.toLocaleLowerCase();
        return this.mouvements.filter((mouvement: any) =>
            mouvement.intitule.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    constructor(private userService: UserService, private mouvementService: MouvementService) {
        this.loadAllMouvements();
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.filteredMouvements = this.mouvements;

    }

}