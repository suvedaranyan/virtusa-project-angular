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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(apiService, router, formBuilder) {
        this.apiService = apiService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.createForm();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.formBuilder.group({
            email: '',
            password: '',
            username: '',
            age: '',
            usertype: 'customer'
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.apiService.register(this.registerForm.value).
            subscribe(function (res) {
            if (res.status == "400") {
                console.log("Details cannot be empty");
            }
            else {
                _this.router.navigate(['/login']);
            }
        }, function (err) {
            alert("An error has occured, Please try again !!!");
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        __metadata("design:paramtypes", [api_service_1.ApiService,
            router_1.Router,
            forms_1.FormBuilder])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map