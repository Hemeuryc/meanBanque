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
var router_1 = require("@angular/router");
var mouvement_service_1 = require("../../../src/app/mouvement.service");
var MouvementCreateComponent = /** @class */ (function () {
    function MouvementCreateComponent(mouvementService, router) {
        this.mouvementService = mouvementService;
        this.router = router;
        this.mouvement = {};
    }
    MouvementCreateComponent.prototype.ngOnInit = function () {
    };
    MouvementCreateComponent.prototype.saveMouvement = function () {
        var _this = this;
        this.mouvementService.saveMouvement(this.mouvement).then(function (result) {
            _this.router.navigate(['/mouvements']);
        }, function (err) {
            console.log(err);
        });
    };
    MouvementCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-mouvement-create',
            templateUrl: './mouvement-create.component.html',
            styleUrls: ['./mouvement-create.component.css']
        }),
        __metadata("design:paramtypes", [mouvement_service_1.MouvementService, router_1.Router])
    ], MouvementCreateComponent);
    return MouvementCreateComponent;
}());
exports.MouvementCreateComponent = MouvementCreateComponent;
//# sourceMappingURL=mouvement-create.component.js.map