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
var index_1 = require("../_services/index");
var MouvementCreateComponent = /** @class */ (function () {
    function MouvementCreateComponent(router, mouvementService, authentificationService, alertService) {
        this.router = router;
        this.mouvementService = mouvementService;
        this.authentificationService = authentificationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    MouvementCreateComponent.prototype.createMouvement = function () {
        var _this = this;
        this.loading = true;
        this.model.user_id = this.currentUser._id;
        this.mouvementService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Création du mouvement réussie', true);
            _this.router.navigate(['/']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    MouvementCreateComponent.prototype.logout = function () {
        this.authentificationService.logout();
    };
    MouvementCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'mouvement.create.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.MouvementService,
            index_1.AuthenticationService,
            index_1.AlertService])
    ], MouvementCreateComponent);
    return MouvementCreateComponent;
}());
exports.MouvementCreateComponent = MouvementCreateComponent;
//# sourceMappingURL=mouvement.create.component.js.map