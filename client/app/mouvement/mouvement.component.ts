import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-mouvement',
  templateUrl: './mouvement.component.html',
  styleUrls: ['./mouvement.component.css']
})
export class MouvementComponent implements OnInit {

  mouvements: any;
  filteredProducts: any;
  private _listeFilter: string;

  constructor(private mouvementService: MouvementService, private router: Router) {
    this.initFilteredProduct();
  }

  ngOnInit() {
    this.getMouvementList();
    this.filteredProducts = this.listeFilter ? this.performFilter(this.listeFilter) : this.mouvements;
 }

  getMouvementList() {
    this.mouvementService.getAllMouvements().then((res) => {
      this.mouvements = res;
    }, (err) => {
      console.log(err);
    });
  }

  deleteMouvement(id) {
    this.mouvementService.deleteMouvement(id).then((result) => {
      this.initFilteredProduct();
      this.router.navigate(['/']);
    }, (err) => {
      console.log(err);
    });
  }

  initFilteredProduct() {
    this.mouvementService.getAllMouvements().then((res) => {
      this.filteredProducts = res;
    }, (err) => {
      console.log(err);
    });
  }

  get listeFilter(): string {
    return this._listeFilter;
  }

  set listeFilter(value: string) {
    this._listeFilter = value;
    this.filteredProducts = this.listeFilter ? this.performFilter(this.listeFilter) : this.mouvements;
  }

  performFilter(filterBy: string): any {
    filterBy =  filterBy.toLocaleLowerCase();
    return this.mouvements.filter((mouvement: any) =>
      mouvement.intitule.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
