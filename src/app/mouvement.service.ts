import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MouvementService {

  constructor(private http: Http) {  }


  getAllMouvements() {
    return new Promise((resolve, reject) => {
      this.http.get('/mouvement')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showMouvement(id) {
    return new Promise((resolve, reject) => {
      this.http.get('/mouvement/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveMouvement(data) {
    return new Promise((resolve, reject) => {
      this.http.post('/mouvement', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateMouvement(id, data) {
    return new Promise((resolve, reject) => {
      this.http.put('/mouvement/' + id, data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  deleteMouvement(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('/mouvement/' + id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


}
