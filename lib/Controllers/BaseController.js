"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IController_1 = require("../Interfaces/IController");
var BaseController = /** @class */ (function () {
    function BaseController(app) {
        this.App = app;
        this.BaseUrl = "";
        this.Prefix = "";
        this.RouteRoles = new Array();
    }
    BaseController.prototype.Register = function () {
    };
    BaseController.prototype.RegisterRoute = function (method, url, callback, role) {
        if (role === void 0) { role = IController_1.Permissions.Public; }
        this.App[method]("" + this.Prefix + this.BaseUrl + url, callback);
        this.RouteRoles.push({
            Route: "" + this.Prefix + this.BaseUrl + url,
            Permission: role,
            Verb: method
        });
    };
    return BaseController;
}());
exports.BaseController = BaseController;
