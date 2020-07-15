"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var angular_webstorage_service_1 = require("angular-webstorage-service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var navigation_component_1 = require("./Components/navigation/navigation.component");
var login_component_1 = require("./Components/login/login.component");
var register_component_1 = require("./Components/register/register.component");
var home_component_1 = require("./Components/home/home.component");
var authguard_guard_1 = require("./Service/authguard.guard");
var admin_component_1 = require("./Components/admin/admin.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var product_component_1 = require("./Components/home/product/product.component");
var cart_item_component_1 = require("./Components/home/cart-item/cart-item.component");
var address_component_1 = require("./Components/home/address/address.component");
var edit_item_component_1 = require("./Components/admin/edit-item/edit-item.component");
var order_item_component_1 = require("./Components/admin/order-item/order-item.component");
var appRoutes = [
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'admin',
        component: admin_component_1.AdminComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        canActivate: [authguard_guard_1.AuthguardGuard]
    },
    {
        path: 'home/cart',
        component: cart_item_component_1.CartItemComponent,
        canActivate: [authguard_guard_1.AuthguardGuard]
    },
    {
        path: 'home/address',
        component: address_component_1.AddressComponent,
        canActivate: [authguard_guard_1.AuthguardGuard]
    },
    {
        path: 'admin/edit',
        component: edit_item_component_1.EditItemComponent,
        canActivate: [authguard_guard_1.AuthguardGuard]
    },
    {
        path: 'admin/order',
        component: order_item_component_1.OrderItemComponent,
        canActivate: [authguard_guard_1.AuthguardGuard]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navigation_component_1.NavigationComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                product_component_1.ProductComponent,
                home_component_1.HomeComponent,
                cart_item_component_1.CartItemComponent,
                address_component_1.AddressComponent,
                admin_component_1.AdminComponent,
                edit_item_component_1.EditItemComponent,
                order_item_component_1.OrderItemComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                http_1.HttpClientModule,
                angular_webstorage_service_1.StorageServiceModule,
                router_1.RouterModule.forRoot(appRoutes),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                ng_bootstrap_1.NgbModule,
                animations_1.BrowserAnimationsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map