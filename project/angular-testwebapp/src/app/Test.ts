import { Question } from "./Question";

export interface Test {
    id: number;
    name: string;
    questions: Question[];
}