import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Mouvement } from '../_models/index';

@Injectable()
export class MouvementService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/mouvements').map((response: Response) => response.json());
    }

    getById(_id: string) {
        return this.http.get('/mouvements/' + _id).map((response: Response) => response.json());
    }

    create(mouvement: Mouvement) {
        return this.http.post('/mouvements/create', mouvement);
    }

    update(mouvement: Mouvement) {
        return this.http.put('/mouvements/' + mouvement._id, mouvement);
    }

    delete(_id: string) {
        return this.http.delete('/mouvements/' + _id);
    }
}