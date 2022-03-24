export interface Option {
    id: number;
    key: string;
    value: string;
    correct: boolean;
}

export interface Question {
    id: string;
    statement: string;
    options: Option[];
}

export type ExamType = 'ONLINE' | 'OFFLINE';

export class Prova {
    id: number;
    name: string;
    description: string;
    type: ExamType;
    questions?: Question[];
}