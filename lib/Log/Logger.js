"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.Log = function (message, obj) {
        if (!obj)
            obj = "";
        var currentDate = moment().format('L, LTS');
        console.log("[" + currentDate + "] : " + message, obj);
    };
    return Logger;
}());
exports.Logger = Logger;
