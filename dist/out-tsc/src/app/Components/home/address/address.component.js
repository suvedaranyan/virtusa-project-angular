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
var AddressComponent = /** @class */ (function () {
    function AddressComponent(api, route) {
        this.api = api;
        this.route = route;
        this.model = {
            address: '',
            city: '',
            state: '',
            country: '',
            zipcode: '',
            phonenumber: ''
        };
    }
    AddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth = this.api.getToken();
        this.api.getAddress(this.auth).subscribe(function (res) {
            if (res.map != null) {
                _this.model = res.map;
            }
        }, function (err) {
            console.log(err);
        });
    };
    AddressComponent.prototype.addAddress = function () {
        var _this = this;
        this.api.upAddress(this.auth, this.model).subscribe(function (res) {
            console.log(res);
            _this.route.navigate(['/home']);
        });
    };
    AddressComponent = __decorate([
        core_1.Component({
            selector: 'app-address',
            templateUrl: './address.component.html',
            styleUrls: ['./address.component.css']
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, router_1.Router])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;
//# sourceMappingURL=address.component.js.map