"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TommorowIs = exports.GetTodayDate = void 0;
function GetTodayDate() {
    var myDate = new Date();
    return [myDate.getUTCMonth() + 1, myDate.getUTCDate()];
}
exports.GetTodayDate = GetTodayDate;
function getMaxDaysInCurrentMonth(month) {
    var now = new Date();
    var year = now.getFullYear();
    var lastDayOfMonth = new Date(year, month, 0);
    return lastDayOfMonth.getDate();
}
function TommorowIs(day, month) {
    var MaxDays = getMaxDaysInCurrentMonth(month);
    if (day >= MaxDays) {
        return [1, month + 1];
    }
    else
        return [day + 1, month];
}
exports.TommorowIs = TommorowIs;
