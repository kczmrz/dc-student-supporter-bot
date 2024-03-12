import { GetDate, getNextDay, GetPlan,GetWeekAndDay } from "./functions";
import { SubjectType, WeekType } from "../types";
export class Schedule {
    
    public async TodayPlan() : Promise<[SubjectType[], number]> {
       const data = await GetDate()  //1 -d tygodnia, 2 - miesiac, 3 - d miesiaca
        .then(res =>  GetWeekAndDay(res[2], res[1]))
        .then(res2 => GetPlan(res2[0], res2[1]));
        return [data[0] as SubjectType[], data[1] as number];
    }

    public async TomorowPlan() : Promise<[SubjectType[], number]>  {
        const data = await GetDate() //1 -d tygodnia, 2 - miesiac, 3 - d miesiaca
        .then(res0 => getNextDay(res0[2], res0[1])) 
        .then(res =>  GetWeekAndDay(res[0], res[1]))
        .then(res2 => GetPlan(res2[0], res2[1]))

        return [data[0] as SubjectType[], data[1] as number];
    }

    public async GetPlanforDate(urDay: number, urMonth:number) : Promise<[SubjectType[], number]> {
        const data = await GetWeekAndDay(urDay, urMonth)
        .then(res2 => GetPlan(res2[0], res2[1]));
       return [data[0] as SubjectType[], data[1] as number];
    }
}