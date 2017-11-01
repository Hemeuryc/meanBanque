import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MouvementService } from '../mouvement.service';

@Component({
  selector: 'app-mouvement-create',
  templateUrl: './mouvement-create.component.html',
  styleUrls: ['./mouvement-create.component.css']
})
export class MouvementCreateComponent implements OnInit {

  mouvement = {};

  constructor(private mouvementService: MouvementService, private router: Router) { }

  ngOnInit() {
  }

  saveMouvement() {
    this.mouvementService.saveMouvement(this.mouvement).then((result) => {
      this.router.navigate(['/mouvements']);
    }, (err) => {
      console.log(err);
    });
  }

}
