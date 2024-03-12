"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lesson_hours_json_1 = __importDefault(require("../../data/lesson_hours.json"));
async function DisplayClockTime(num) {
    let FullHours = "";
    await lesson_hours_json_1.default.filter((hour) => hour.Hour === num).map((hour1) => {
        FullHours = hour1.FromHour + " - " + hour1.ToHour;
    });
    return FullHours;
}
function getHoursByWeek(obj, num) {
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].numberOfWeek.includes(num)) {
            return obj[i].HourOfLesson;
        }
    }
}
async function CreateMessage(data, nmbrOfWeek) {
    let FinalMsg = "";
    for (let i = 0; i < data.length; i++) {
        let hours = getHoursByWeek(data[i].Week, nmbrOfWeek);
        for (let x = 0; x < hours.length; x++) {
            let hours2 = await DisplayClockTime(hours[x]);
            FinalMsg += hours2 + " **" + data[i].Name + "** " + data[i].Type + " sala: " + data[i].Room + "\n";
        }
    }
    console.log(FinalMsg);
    return FinalMsg;
}
exports.default = CreateMessage;
