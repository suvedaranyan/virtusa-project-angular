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
var api_service_1 = require("src/app/Service/api.service");
var router_1 = require("@angular/router");
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(auth, route) {
        this.auth = auth;
        this.route = route;
        if (this.auth.getAuthType() == null) {
            this.loggedType = "home";
        }
        else {
            if (this.auth.getAuthType() == "customer") {
                this.loggedType = "customer";
            }
            else if (this.auth.getAuthType() == "admin") {
                this.loggedType = "admin";
            }
        }
    }
    NavigationComponent.prototype.ngOnInit = function () {
        //console.log(this.auth.getAuthType());
    };
    NavigationComponent.prototype.logout = function () {
        this.loggedType = "home";
        this.auth.removeToken();
        this.route.navigate(['/login']);
    };
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'app-navigation',
            templateUrl: './navigation.component.html',
            styleUrls: ['./navigation.component.css']
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, router_1.Router])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map