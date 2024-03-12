"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var weeks_json_1 = __importDefault(require("../../data/weeks.json"));
function GetWeekNumber(urDay, urMonth) {
    var _a;
    var Filtr = weeks_json_1.default.filter(function (user) {
        return (user.DateInterval.Month == urMonth) &&
            urDay >= user.DateInterval.from &&
            urDay <= user.DateInterval.to;
    });
    console.log(Filtr);
    return (_a = Filtr[0]) === null || _a === void 0 ? void 0 : _a.NumOfWeek;
}
exports.default = GetWeekNumber;
