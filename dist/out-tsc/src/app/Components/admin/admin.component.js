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
var AdminComponent = /** @class */ (function () {
    function AdminComponent(api, router) {
        this.api = api;
        this.router = router;
        this.products = [];
        this.fileToUpload = null;
        this.showAdd = false;
        this.imageUrl = "/assets/img/noimage.png";
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.api.isAuthenticated) {
            this.auth = this.api.getToken();
            this.api.getProducts(this.auth).subscribe(function (res) {
                _this.products = res.oblist;
            });
        }
    };
    AdminComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    };
    AdminComponent.prototype.show = function () {
        this.showAdd = true;
    };
    AdminComponent.prototype.hide = function () {
        this.showAdd = false;
    };
    AdminComponent.prototype.addProd = function (desc, quan, price, prodname, image) {
        var _this = this;
        this.api.addProduct(this.auth, desc.value, quan.value, price.value, prodname.value, this.fileToUpload).subscribe(function (res) {
            _this.products = res.oblist;
        });
    };
    AdminComponent.prototype.delProd = function (prodid) {
        var _this = this;
        this.api.delProduct(this.auth, prodid.value).subscribe(function (res) {
            _this.products = res.oblist;
        });
    };
    AdminComponent.prototype.edit = function (prodid) {
        var navigationExtras = {
            queryParams: {
                "user": prodid.value
            }
        };
        this.router.navigate(["admin/edit"], navigationExtras);
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.css']
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService, router_1.Router])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map