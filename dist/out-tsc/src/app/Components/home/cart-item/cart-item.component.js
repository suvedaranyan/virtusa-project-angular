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
var CartItemComponent = /** @class */ (function () {
    function CartItemComponent(api, route) {
        this.api = api;
        this.route = route;
        this.totalSum = 0;
    }
    CartItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth = this.api.getToken();
        this.api.getCartItems(this.auth).subscribe(function (res) {
            _this.cartlist = res.oblist;
            _this.cartlist.forEach(function (value) {
                _this.totalSum = _this.totalSum + (value.quantity * value.price);
            });
        });
    };
    CartItemComponent.prototype.update = function (id, quantity) {
        var _this = this;
        this.api.updateCart(this.auth, id.value, quantity.value).subscribe(function (res) {
            _this.cartlist = res.oblist;
            _this.cartlist.forEach(function (value) {
                _this.totalSum = _this.totalSum + (value.quantity * value.price);
            });
        });
    };
    CartItemComponent.prototype.delete = function (id) {
        var _this = this;
        this.api.delCart(this.auth, id.value).subscribe(function (res) {
            _this.cartlist = res.oblist;
            _this.cartlist.forEach(function (value) {
                _this.totalSum = _this.totalSum + (value.quantity * value.price);
            });
        });
    };
    CartItemComponent.prototype.place = function () {
        this.api.place(this.auth).subscribe(function (res) {
            console.log(res);
        });
        this.route.navigate(['/home']);
    };
    CartItemComponent = __decorate([
        core_1.Component({
            selector: 'app-cart-item',
            templateUrl: './cart-item.component.html',
            styleUrls: ['./cart-item.component.css']
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, router_1.Router])
    ], CartItemComponent);
    return CartItemComponent;
}());
exports.CartItemComponent = CartItemComponent;
//# sourceMappingURL=cart-item.component.js.map