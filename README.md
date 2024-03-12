!Dc student support bot
Bot for my personal use


#Commands: !today, !tomorrow, !plan

#Configuration:
Weeks.json - are "weeks" on your university e.g. first week is since 1 OCT to 6 OCT. JSON file:

 `   {
      "NumOfWeek": 1,
      "DateInterval": {
        "from": 12,
        "to": 16,
        "Month": 2
      }
    }`

NumOfWeek- number of your week. 
DateInterval from - from day (in Month)
DateInterval to - to day (in Month)
Month: a number of week.

___________________________________________________________________________
Lesson_hours.json -are a individual hours in your university.

 `   {
        "Hour": 1,
        "FromHour": "8:00",
        "ToHour": "8:45"
    }`
Hour is a ordidnal number of hour. 
FromHour - starting a lesson
ToHour - ending a lesson


____________________________________________________________________________
Lessons.json  - is your individual university plan

`
{
      "Name": "English",
      "Week": [
        {
          "DayOFWeek": 1,
          "numberOfWeek": [1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14],
          "HourOfLesson": [1,2]
        }
      ],
      "Teacher": "John Smith",
      "Room": "114",
      "Type": "Ćwiczenia" 
}`


Name - name of the subject
Week => DayOfWeek - 1 monday [...] 7 - sunday 
Week =>  NumberOfWeek - list of WEEKS with this lesson array[]
Week => HourOfLesson - hour of this lesson. WARNING - hour as ordidnal number.
Teacher - name and surrname of Teacher
Room - classroom
type - exercises, lectures or laboratories


![image](https://github.com/kczmrz/dc-student-supporter-bot/assets/96081508/9fd00def-c384-43e9-81ea-66ca867ad8fe)


