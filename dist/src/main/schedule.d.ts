import { SubjectType } from "../types";
export declare class Schedule {
    TodayPlan(): Promise<[SubjectType[], number]>;
    TomorowPlan(): Promise<[SubjectType[], number]>;
    GetPlanforDate(urDay: number, urMonth: number): Promise<[SubjectType[], number]>;
}
