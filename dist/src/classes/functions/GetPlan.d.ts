export default function getDailyPlan(dayOfWeek: number, numberOfWeek: number): {
    Name: string;
    Week: {
        DayOFWeek: number;
        numberOfWeek: number[];
        HourOfLesson: number[];
    }[];
    Teacher: string;
    Room: string;
    Type: string;
}[];
