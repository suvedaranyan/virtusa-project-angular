"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
var app_po_1 = require("./app.po");
describe('workspace-project App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.AppPage();
    });
    it('should display welcome message', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to shopping-app!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map