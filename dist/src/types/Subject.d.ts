import WeekData from "./weekInSub";
declare enum TypeOfSubj {
    Wyklad = "Wyk\u0142ad",
    Cwiczenia = "\u0106wiczenia",
    Laborki = "Laborki",
    Lecture = "Lecture",
    Exercises = "Exercises",
    Labs = "Labs"
}
export default interface Subject {
    Name: String;
    Week: WeekData[];
    Teacher: String;
    Room: String;
    Type: TypeOfSubj;
}
export {};
