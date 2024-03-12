import WeekData from "./weekInSub";
enum TypeOfSubj {
  //Polish
    Wyklad = "Wykład",
    Cwiczenia = "Ćwiczenia",
    Laborki = "Laborki",
    //English
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