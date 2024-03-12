# Dc student support bot<br>


## Bot for my personal use<br>


# Commands: `!today, !tomorrow, !plan`<br>
<br>
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
<br>
NumOfWeek- number of your week. <br>
DateInterval from - from day (in Month)<br>
DateInterval to - to day (in Month)<br>
Month: a number of week.<br>

___________________________________________________________________________
Lesson_hours.json -are a individual hours in your university.<br>

 `   {
        "Hour": 1,
        "FromHour": "8:00",
        "ToHour": "8:45"
    }`<br>
Hour is a ordidnal number of hour. <br>
FromHour - starting a lesson <br>
ToHour - ending a lesson <br>

<br>
____________________________________________________________________________
Lessons.json  - is your individual university plan <br>

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
<br>

Name - name of the subject <br>
Week => DayOfWeek - 1 monday [...] 7 - sunday  <br>
Week =>  NumberOfWeek - list of WEEKS with this lesson array[] <br>
Week => HourOfLesson - hour of this lesson. WARNING - hour as ordidnal number. <br>
Teacher - name and surrname of Teacher <br>
Room - classroom <br>
type - exercises, lectures or laboratories <br>

<br>
![image](https://github.com/kczmrz/dc-student-supporter-bot/assets/96081508/9fd00def-c384-43e9-81ea-66ca867ad8fe)


