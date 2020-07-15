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
var EditItemComponent = /** @class */ (function () {
    function EditItemComponent(route, api) {
        var _this = this;
        this.route = route;
        this.api = api;
        this.product = {
            productid: 0,
            description: '',
            price: 0,
            productname: '',
            quantity: 0,
            productimage: null
        };
        this.products = [];
        this.fileToUpload = null;
        this.imageUrl = "/assets/img/noimage.png";
        if (this.api.isAuthenticated) {
            this.auth = this.api.getToken();
            this.api.getProducts(this.auth).subscribe(function (res) {
                res.oblist.forEach(function (pro) {
                    if (pro.productid == _this.prodid) {
                        _this.product = pro;
                        _this.fileToUpload = pro.productimage;
                    }
                });
            });
        }
    }
    EditItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.prodid = params["user"];
        });
    };
    EditItemComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        this.fileToUpload = file.item(0);
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
    };
    EditItemComponent.prototype.updateProd = function (desc, quan, price, prodname, image) {
        this.api.updateProduct(this.auth, desc.value, quan.value, price.value, prodname.value, this.fileToUpload, this.product.productid).subscribe(function (res) {
            console.log(res);
        });
    };
    EditItemComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-item',
            templateUrl: './edit-item.component.html',
            styleUrls: ['./edit-item.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, api_service_1.ApiService])
    ], EditItemComponent);
    return EditItemComponent;
}());
exports.EditItemComponent = EditItemComponent;
//# sourceMappingURL=edit-item.component.js.map