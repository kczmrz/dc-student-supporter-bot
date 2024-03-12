"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const weeks_json_1 = __importDefault(require("../../data/weeks.json"));
function getDayOfWeek(dayOfMonth, month) {
    const date = new Date(2024, month - 1, dayOfMonth);
    let dayOfWeek = date.getDay();
    if (dayOfWeek === 0) {
        dayOfWeek = 7;
    }
    return dayOfWeek;
}
async function GetWeekNumberAndWeekDay(urDay, urMonth) {
    let Filtr;
    let WeekDay;
    Filtr = await weeks_json_1.default.filter((user) => (user.DateInterval.Month === urMonth) &&
        urDay >= user.DateInterval.from &&
        urDay <= user.DateInterval.to);
    WeekDay = getDayOfWeek(urDay, urMonth);
    return [WeekDay, Filtr[0].NumOfWeek];
}
exports.default = GetWeekNumberAndWeekDay;
