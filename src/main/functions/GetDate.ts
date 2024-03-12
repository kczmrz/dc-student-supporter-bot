export default async function GetTodayDate(): Promise<number[]>
{
    const myDate = new Date();

    return [ myDate.getDay() as number, myDate.getUTCMonth() +1 as number, myDate.getUTCDate() as number, ];
}



