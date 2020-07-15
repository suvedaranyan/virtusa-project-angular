"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var authguard_guard_1 = require("./authguard.guard");
describe('AuthguardGuard', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [authguard_guard_1.AuthguardGuard]
        });
    });
    it('should ...', testing_1.inject([authguard_guard_1.AuthguardGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=authguard.guard.spec.js.map