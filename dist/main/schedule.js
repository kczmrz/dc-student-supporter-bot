"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
const functions_1 = require("./functions");
class Schedule {
    async TodayPlan() {
        const data = await (0, functions_1.GetDate)()
            .then(res => (0, functions_1.GetWeekAndDay)(res[2], res[1]))
            .then(res2 => (0, functions_1.GetPlan)(res2[0], res2[1]));
        return [data[0], data[1]];
    }
    async TommorowPlan() {
        const data = await (0, functions_1.GetDate)()
            .then(res0 => (0, functions_1.getNextDay)(res0[2], res0[1]))
            .then(res => (0, functions_1.GetWeekAndDay)(res[0], res[1]))
            .then(res2 => (0, functions_1.GetPlan)(res2[0], res2[1]));
        return [data[0], data[1]];
    }
    async GetPlanforDate(urDay, urMonth) {
        const data = await (0, functions_1.GetWeekAndDay)(urDay, urMonth)
            .then(res2 => (0, functions_1.GetPlan)(res2[0], res2[1]));
        return [data[0], data[1]];
    }
}
exports.Schedule = Schedule;
