"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ControllerManager {
    constructor(app) {
        this._App = app;
        this._controllers = new Array();
    }
    Register(controller, prefix) {
        this._controllers.push(controller);
        if (prefix)
            controller.Prefix = prefix;
        controller.Register();
    }
    getControllers() {
        return this._controllers;
    }
}
exports.ControllerManager = ControllerManager;
//# sourceMappingURL=ControllerManager.js.map