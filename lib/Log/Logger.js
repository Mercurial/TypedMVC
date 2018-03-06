"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class Logger {
    static Log(message, obj) {
        if (!obj)
            obj = "";
        let currentDate = moment().format('L, LTS');
        console.log(`[${currentDate}] : ${message}`, obj);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map