import { SubjectType,WeekType } from "../../types";
import lesson_hours from '../../data/lesson_hours.json';

//change 1,2,3 to normal hours
async function DisplayClockTime(num: number): Promise <string> {
    let FullHours ="";
    await lesson_hours.filter((hour)=> hour.Hour === num).map((hour1) =>{  
       
        FullHours = hour1.FromHour + " - " + hour1.ToHour as string;
        
    })
    return FullHours;
}

//this function return a hour knows weeknumber
function getHoursByWeek(obj: any, num: number) {
     
      for(let i =0; i < obj.length; i++)
      {
        if(obj[i].numberOfWeek.includes(num)) {
            
            return obj[i].HourOfLesson;
        }
      }
  }

export default async function CreateMessage(data:SubjectType[], nmbrOfWeek: number) : Promise<string>
{   let FinalMsg:string = ""
    for(let i = 0; i < data.length; i++) {
       let hours = getHoursByWeek(data[i].Week, nmbrOfWeek);
       
       for(let x = 0; x < hours.length; x++)
       {
        let hours2 = await  DisplayClockTime(hours[x]);
        FinalMsg += hours2 + " **" + data[i].Name + "** "+ data[i].Type + " in classroom: " + data[i].Room + "\n"
       }
    }
    return "Week: " + nmbrOfWeek + '\n' + FinalMsg; 
}




//Kczmrz