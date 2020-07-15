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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var angular_webstorage_service_1 = require("angular-webstorage-service");
var ApiService = /** @class */ (function () {
    function ApiService(storage, http) {
        this.storage = storage;
        this.http = http;
        this.REG_API = "http://localhost:8087/user/signup";
        this.LOGU_API = "http://localhost:8087/user/verify";
        this.LOGA_API = "http://localhost:8087/admin/verify";
        this.PRDLST_API = "http://localhost:8087/user/getProducts";
        this.ADD_CART_API = "http://localhost:8087/user/addToCart?productId=";
        this.VW_CART_API = "http://localhost:8087/user/viewCart";
        this.UP_CART_API = "http://localhost:8087/user/updateCart";
        this.DEL_CART_API = "http://localhost:8087/user/delCart";
        this.PLC_ORD_API = "http://localhost:8087/user/placeOrder";
        this.ADR_API = "http://localhost:8087/user/addAddress";
        this.GT_ADR_API = "http://localhost:8087/user/getAddress";
        this.ADD_PRD_API = "http://localhost:8087/admin/addProduct";
        this.DEL_PRD_API = "http://localhost:8087/admin/delProduct";
        this.UPD_PRD_API = "http://localhost:8087/admin/updateProducts";
        this.ORD_API = "http://localhost:8087/admin/viewOrders";
        this.UPD_ORD_API = "http://localhost:8087/admin/updateOrder";
    }
    // Registering the users to the database
    ApiService.prototype.register = function (user) {
        return this.http.post(this.REG_API, JSON.stringify(user), {
            headers: { 'Content-Type': 'application/json' }
        });
    };
    // validating user credentials
    ApiService.prototype.userLogin = function (user) {
        return this.http.post(this.LOGU_API, JSON.stringify(user), {
            headers: { 'Content-Type': 'application/json' }
        });
    };
    // validating admin credentials
    ApiService.prototype.adminLogin = function (user) {
        return this.http.post(this.LOGA_API, JSON.stringify(user), {
            headers: { 'Content-Type': 'application/json' }
        });
    };
    // Fetching all the products from the database
    ApiService.prototype.getProducts = function (auth) {
        var myheader = new http_1.HttpHeaders().set('AUTH_TOKEN', auth);
        return this.http.post(this.PRDLST_API, null, { headers: myheader });
    };
    // Add Products to the user Cart
    ApiService.prototype.addCartItems = function (product, auth) {
        var myheader = new http_1.HttpHeaders().set('AUTH_TOKEN', auth);
        return this.http.get(this.ADD_CART_API + product.productid, { headers: myheader });
    };
    // View Cart Items for the logged User
    ApiService.prototype.getCartItems = function (auth) {
        var myheader = new http_1.HttpHeaders().set('AUTH_TOKEN', auth);
        return this.http.get(this.VW_CART_API, { headers: myheader });
    };
    // add items to cart for the logged User
    ApiService.prototype.updateCart = function (auth, prodid, quant) {
        var myheader = new http_1.HttpHeaders().set('AUTH_TOKEN', auth);
        return this.http.get(this.UP_CART_API + "?bufcartid=" + prodid + "&quantity=" + quant, { headers: myheader });
    };
    // delete cart Item from logged User's Cart item
    ApiService.prototype.delCart = function (auth, bufdid) {
        var myheader = new http_1.HttpHeaders().set('AUTH_TOKEN', auth);
        return this.http.get(this.DEL_CART_API + "?bufcartid=" + bufdid, { headers: myheader });
    };
    // place the order of logged User
    ApiService.prototype.place = function (auth) {
        var myheader = new http_1.HttpHeaders().set('AUTH_TOKEN', auth);
        return this.http.get(this.PLC_ORD_API, { headers: myheader });
    };
    // update Address of logged User
    ApiService.prototype.upAddress = function (auth, adr) {
        var myheader = new http_1.HttpHeaders().set('AUTH_TOKEN', auth);
        return this.http.post(this.ADR_API, adr, { headers: myheader });
    };
    // fetch address of logged user
    ApiService.prototype.getAddress = function (auth) {
        var myheader = new http_1.HttpHeaders().set('AUTH_TOKEN', auth);
        return this.http.post(this.GT_ADR_API, null, { headers: myheader });
    };
    // Add product for Logged AdminUser
    ApiService.prototype.addProduct = function (auth, desc, quan, price, prodname, image) {
        var formData = new FormData();
        formData.append("description", desc);
        formData.append("price", price);
        formData.append("productname", prodname);
        formData.append("quantity", quan);
        formData.append("file", image);
        var myheader = new http_1.HttpHeaders().set('AUTH_TOKEN', auth);
        return this.http.post(this.ADD_PRD_API, formData, { headers: myheader });
    };
    // delete Product for Logged Admin User
    ApiService.prototype.delProduct = function (auth, prodid) {
        var myheader = new http_1.HttpHeaders().set('AUTH_TOKEN', auth);
        return this.http.get(this.DEL_PRD_API + "?productid=" + prodid, { headers: myheader });
    };
    // delete Product for Logged Admin User
    ApiService.prototype.getOrders = function (auth) {
        var myheader = new http_1.HttpHeaders().set('AUTH_TOKEN', auth);
        return this.http.get(this.ORD_API, { headers: myheader });
    };
    ApiService.prototype.update = function (auth, order) {
        var myheader = new http_1.HttpHeaders().set('AUTH_TOKEN', auth);
        var formData = new FormData();
        formData.append("orderId", order.orderId);
        formData.append("orderStatus", order.orderStatus);
        return this.http.post(this.UPD_ORD_API, formData, { headers: myheader });
    };
    // delete Product for Logged Admin User
    ApiService.prototype.upOrders = function (auth, prodid) {
        var myheader = new http_1.HttpHeaders().set('AUTH_TOKEN', auth);
        return this.http.get(this.DEL_PRD_API + "?productid=" + prodid, { headers: myheader });
    };
    // update Product for Logged Admin User
    ApiService.prototype.updateProduct = function (auth, desc, quan, price, prodname, image, productid) {
        var formData = new FormData();
        formData.append("description", desc);
        formData.append("price", price);
        formData.append("productname", prodname);
        formData.append("quantity", quan);
        formData.append("file", image);
        formData.append("productid", productid);
        var myheader = new http_1.HttpHeaders().set('AUTH_TOKEN', auth);
        return this.http.post(this.UPD_PRD_API, formData, { headers: myheader });
    };
    // Authentication Methods 
    ApiService.prototype.isAuthenticated = function () {
        return this.getToken() !== null;
    };
    ApiService.prototype.storeToken = function (token, auth_type) {
        this.storage.set("auth_token", token);
        this.storage.set("auth_type", auth_type);
    };
    ApiService.prototype.getAuthType = function () {
        if (this.storage.get("auth_type") !== null) {
            return this.storage.get("auth_type");
        }
        return null;
    };
    ApiService.prototype.getToken = function () {
        return this.storage.get("auth_token");
    };
    ApiService.prototype.removeToken = function () {
        this.storage.remove("auth_type");
        return this.storage.remove("auth_token");
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(0, core_1.Inject(angular_webstorage_service_1.SESSION_STORAGE)),
        __metadata("design:paramtypes", [Object, http_1.HttpClient])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map