function getMaxDaysInCurrentMonth(month:any) {
    var now = new Date(); 
    var year = now.getFullYear(); 
    
    var lastDayOfMonth = new Date(year,month, 0);
    
    
    return lastDayOfMonth.getDate();
 }


export default async function NextDayIs(day:number, month: any) : Promise <number[]>
{
   const MaxDays = getMaxDaysInCurrentMonth(month);
   if(day >= MaxDays)
   {
       return [1, month + 1]
   }
   else return [day+1, month];
}