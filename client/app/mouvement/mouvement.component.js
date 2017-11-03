"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mouvement_service_1 = require("../../../src/app/mouvement.service");
var router_1 = require("@angular/router");
var MouvementComponent = /** @class */ (function () {
    function MouvementComponent(mouvementService, router) {
        this.mouvementService = mouvementService;
        this.router = router;
        this.initFilteredProduct();
    }
    MouvementComponent.prototype.ngOnInit = function () {
        this.getMouvementList();
        this.filteredProducts = this.listeFilter ? this.performFilter(this.listeFilter) : this.mouvements;
    };
    MouvementComponent.prototype.getMouvementList = function () {
        var _this = this;
        this.mouvementService.getAllMouvements().then(function (res) {
            _this.mouvements = res;
        }, function (err) {
            console.log(err);
        });
    };
    MouvementComponent.prototype.deleteMouvement = function (id) {
        var _this = this;
        this.mouvementService.deleteMouvement(id).then(function (result) {
            _this.initFilteredProduct();
            _this.router.navigate(['/']);
        }, function (err) {
            console.log(err);
        });
    };
    MouvementComponent.prototype.initFilteredProduct = function () {
        var _this = this;
        this.mouvementService.getAllMouvements().then(function (res) {
            _this.filteredProducts = res;
        }, function (err) {
            console.log(err);
        });
    };
    Object.defineProperty(MouvementComponent.prototype, "listeFilter", {
        get: function () {
            return this._listeFilter;
        },
        set: function (value) {
            this._listeFilter = value;
            this.filteredProducts = this.listeFilter ? this.performFilter(this.listeFilter) : this.mouvements;
        },
        enumerable: true,
        configurable: true
    });
    MouvementComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.mouvements.filter(function (mouvement) {
            return mouvement.intitule.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    MouvementComponent = __decorate([
        core_1.Component({
            selector: 'app-mouvement',
            templateUrl: './mouvement.component.html',
            styleUrls: ['./mouvement.component.css']
        }),
        __metadata("design:paramtypes", [mouvement_service_1.MouvementService, router_1.Router])
    ], MouvementComponent);
    return MouvementComponent;
}());
exports.MouvementComponent = MouvementComponent;
//# sourceMappingURL=mouvement.component.js.map