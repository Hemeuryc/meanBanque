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
var MouvementEditComponent = /** @class */ (function () {
    function MouvementEditComponent(mouvementService, router, route) {
        this.mouvementService = mouvementService;
        this.router = router;
        this.route = route;
        this.mouvement = {};
    }
    MouvementEditComponent.prototype.ngOnInit = function () {
        this.getMouvement(this.route.snapshot.params['id']);
    };
    MouvementEditComponent.prototype.getMouvement = function (id) {
        var _this = this;
        this.mouvementService.showMouvement(id).then(function (res) {
            _this.mouvement = res;
            console.log(_this.mouvement);
        }, function (err) {
            console.log(err);
        });
    };
    MouvementEditComponent.prototype.updateMouvement = function (id) {
        var _this = this;
        this.mouvementService.updateMouvement(id, this.mouvement).then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/mouvements']);
        }, function (err) {
            console.log(err);
        });
    };
    MouvementEditComponent = __decorate([
        core_1.Component({
            selector: 'app-mouvement-edit',
            templateUrl: './mouvement-edit.component.html',
            styleUrls: ['./mouvement-edit.component.css']
        }),
        __metadata("design:paramtypes", [mouvement_service_1.MouvementService, router_1.Router, router_1.ActivatedRoute])
    ], MouvementEditComponent);
    return MouvementEditComponent;
}());
exports.MouvementEditComponent = MouvementEditComponent;
//# sourceMappingURL=mouvement-edit.component.js.map