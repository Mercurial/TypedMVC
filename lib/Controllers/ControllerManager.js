"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ControllerManager = /** @class */ (function () {
    function ControllerManager(app) {
        this._App = app;
        this._controllers = new Array();
    }
    ControllerManager.prototype.Register = function (controller, prefix) {
        this._controllers.push(controller);
        if (prefix)
            controller.Prefix = prefix;
        controller.Register();
    };
    ControllerManager.prototype.getControllers = function () {
        return this._controllers;
    };
    return ControllerManager;
}());
exports.ControllerManager = ControllerManager;
