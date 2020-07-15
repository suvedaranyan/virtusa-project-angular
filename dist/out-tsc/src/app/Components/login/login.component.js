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
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiService, router, formBuilder) {
        this.apiService = apiService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.error = false;
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.formBuilder.group({
            email: '',
            password: ''
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.apiService.userLogin(this.loginForm.value).
            subscribe(function (res) {
            if (res.status == "200") {
                _this.apiService.storeToken(res.auth_TOKEN, "customer");
                _this.router.navigate(['/home']);
                _this.error = false;
            }
            else if (res.status == "500") {
                _this.apiService.adminLogin(_this.loginForm.value).
                    subscribe(function (res) {
                    if (res.status == "200") {
                        _this.apiService.storeToken(res.auth_TOKEN, "admin");
                        _this.router.navigate(['/admin']);
                    }
                    else {
                        _this.router.navigate(['/login']);
                    }
                    _this.error = false;
                }, function (err) {
                    console.log(err);
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService,
            router_1.Router,
            forms_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map