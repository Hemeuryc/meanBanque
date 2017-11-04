import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, MouvementService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'mouvement.create.component.html'
})

export class MouvementCreateComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private mouvementService: MouvementService,
        private alertService: AlertService) { }

    createMouvement() {
        this.loading = true;
        this.mouvementService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Création du mouvement réussie', true);
                    this.router.navigate(['/']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
