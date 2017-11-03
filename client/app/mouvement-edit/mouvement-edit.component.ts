import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MouvementService} from '../../../src/app/mouvement.service';


@Component({
  selector: 'app-mouvement-edit',
  templateUrl: './mouvement-edit.component.html',
  styleUrls: ['./mouvement-edit.component.css']
})
export class MouvementEditComponent implements OnInit {

  mouvement ={};

  constructor(private mouvementService: MouvementService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  this.getMouvement(this.route.snapshot.params['id']);}



  getMouvement(id) {
    this.mouvementService.showMouvement(id).then((res) => {
      this.mouvement = res;
      console.log(this.mouvement);
    }, (err) => {
      console.log(err);
    });
  }

  updateMouvement(id) {
    this.mouvementService.updateMouvement(id, this.mouvement).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/mouvements']);
    }, (err) => {
      console.log(err);
    });
  }

}
