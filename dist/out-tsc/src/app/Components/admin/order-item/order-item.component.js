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
var api_service_1 = require("src/app/Service/api.service");
var OrderItemComponent = /** @class */ (function () {
    function OrderItemComponent(route, api) {
        this.route = route;
        this.api = api;
        this.orderlist = [];
    }
    OrderItemComponent.prototype.ngOnInit = function () {
        this.auth = this.api.getToken();
        this.getOrderList();
    };
    OrderItemComponent.prototype.approve = function (orderid) {
        var _this = this;
        var order = {
            "orderId": orderid,
            "orderStatus": "Approved"
        };
        this.api.update(this.auth, order).subscribe(function (res) {
            _this.getOrderList();
        });
    };
    OrderItemComponent.prototype.decline = function (orderid) {
        var _this = this;
        var order = {
            "orderId": orderid,
            "orderStatus": "Declined"
        };
        this.api.update(this.auth, order).subscribe(function (res) {
            _this.getOrderList();
        });
    };
    OrderItemComponent.prototype.getOrderList = function () {
        var _this = this;
        this.api.getOrders(this.auth).subscribe(function (res) {
            _this.orderlist = res.orderlist;
        });
    };
    OrderItemComponent = __decorate([
        core_1.Component({
            selector: 'order-item',
            templateUrl: './order-item.component.html',
            styleUrls: ['./order-item.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, api_service_1.ApiService])
    ], OrderItemComponent);
    return OrderItemComponent;
}());
exports.OrderItemComponent = OrderItemComponent;
//# sourceMappingURL=order-item.component.js.map