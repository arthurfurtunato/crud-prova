import { IsString, MaxLength } from 'class-validator'

export class Option {
    id: string;
    key: string;
    value: string;
    correct: boolean;
}
  
export class Question {
    id: string;
    statement: string;
    options: Option[];
}
  
export type ExamType = 'ONLINE' | 'OFFLINE';

export class ProvaSchema {
    @IsString()
    @MaxLength(120)
    name: string;

    @IsString()
    @MaxLength(120)
    description: string;
    type: ExamType;
    questions?: Question[];
}