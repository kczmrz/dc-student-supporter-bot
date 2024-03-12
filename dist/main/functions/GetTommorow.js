"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMaxDaysInCurrentMonth(month) {
    var now = new Date();
    var year = now.getFullYear();
    var lastDayOfMonth = new Date(year, month, 0);
    return lastDayOfMonth.getDate();
}
async function NextDayIs(day, month) {
    const MaxDays = getMaxDaysInCurrentMonth(month);
    if (day >= MaxDays) {
        return [1, month + 1];
    }
    else
        return [day + 1, month];
}
exports.default = NextDayIs;
