"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IController_1 = require("../Interfaces/IController");
class BaseController {
    constructor(app) {
        this.App = app;
        this.BaseUrl = "";
        this.Prefix = "";
        this.RouteRoles = new Array();
    }
    Register() {
    }
    RegisterRoute(method, url, callback, role = IController_1.Permissions.Public) {
        this.App[method](`${this.Prefix}${this.BaseUrl}${url}`, callback);
        this.RouteRoles.push({
            Route: `${this.Prefix}${this.BaseUrl}${url}`,
            Permission: role,
            Verb: method
        });
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=BaseController.js.map