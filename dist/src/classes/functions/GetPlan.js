"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lessons_json_1 = __importDefault(require("../../data/lessons.json"));
function getDailyPlan(dayOfWeek, numberOfWeek) {
    // Filtruj po numerze tygodnia
    var weekLessons = lessons_json_1.default.filter(function (lesson) { return lesson.Week.some(function (week) { return week.numberOfWeek.indexOf(numberOfWeek) !== -1; }); });
    // Filtruj po dniu tygodnia
    var wynik = weekLessons.filter(function (zajecie) { return zajecie.Week.some(function (week) { return week.DayOFWeek === dayOfWeek; }); });
    return wynik;
}
exports.default = getDailyPlan;
