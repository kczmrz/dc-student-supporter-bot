"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mySchedule = void 0;
var functions_1 = require("./functions/");
require("../data/weeks.json");
var mySchedule = /** @class */ (function () {
    function mySchedule() {
    }
    mySchedule.prototype.DisplayPlan = function () {
        var Today = (0, functions_1.GetDate)();
        var TodayWeek = (0, functions_1.GetWeekNumber)(Today[0], Today[1]);
        console.log(TodayWeek);
    };
    return mySchedule;
}());
exports.mySchedule = mySchedule;
