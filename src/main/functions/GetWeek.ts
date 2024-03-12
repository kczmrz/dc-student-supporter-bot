import data from '../../data/weeks.json'

//Dzien tygodnia z daty
function getDayOfWeek(dayOfMonth: number, month: number) {
  
    const date = new Date(2024, month - 1, dayOfMonth);

   
    let dayOfWeek = date.getDay();


    if (dayOfWeek === 0) {
        dayOfWeek = 7; 
    }

    return dayOfWeek;
}

//Daje tydzien oraz numer dnia tygodnia z miesiaca
export default async function GetWeekNumberAndWeekDay(urDay: number, urMonth: number): Promise<number[]> {
    let Filtr;
    let WeekDay;
    Filtr = await data.filter((user: any) =>
        (user.DateInterval.Month === urMonth) &&
        urDay >= user.DateInterval.from &&
        urDay <= user.DateInterval.to
    );
    
  WeekDay = getDayOfWeek(urDay, urMonth)
   

    return [WeekDay, Filtr[0].NumOfWeek as number];
}
