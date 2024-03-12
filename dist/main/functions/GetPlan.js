"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lessons_json_1 = __importDefault(require("../../data/lessons.json"));
async function getDailyPlan(urDay, urWeek) {
    const weekLessons = lessons_json_1.default.filter(lesson => lesson.Week.some(week => week.numberOfWeek.indexOf(urWeek) !== -1));
    const FinalData = weekLessons.filter(lesson => lesson.Week.some(week => week.DayOFWeek === urDay));
    return [FinalData, urWeek];
}
exports.default = getDailyPlan;
