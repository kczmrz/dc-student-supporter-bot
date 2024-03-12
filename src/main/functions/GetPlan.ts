import data from '../../data/lessons.json';

export default async function getDailyPlan(urDay: number, urWeek: number) {
   
  const weekLessons = data.filter(lesson => lesson.Week.some(week => week.numberOfWeek.indexOf(urWeek) !== -1));
  const FinalData = weekLessons.filter(lesson => lesson.Week.some(week => week.DayOFWeek === urDay));

   return [FinalData, urWeek];

}