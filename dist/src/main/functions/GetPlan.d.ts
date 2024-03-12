export default function getDailyPlan(urDay: number, urWeek: number): Promise<(number | {
    Name: string;
    Week: {
        DayOFWeek: number;
        numberOfWeek: number[];
        HourOfLesson: number[];
    }[];
    Teacher: string;
    Room: string;
    Type: string;
}[])[]>;
