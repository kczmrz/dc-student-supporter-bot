"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function GetTodayDate() {
    const myDate = new Date();
    return [myDate.getDay(), myDate.getUTCMonth() + 1, myDate.getUTCDate(),];
}
exports.default = GetTodayDate;
