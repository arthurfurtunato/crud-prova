import { IsBoolean, IsString, MaxLength } from 'class-validator'

export class OptionSchema {
    @IsString()
    @MaxLength(255)
    key: string;

    @IsString()
    @MaxLength(255)
    value: string;

    @IsBoolean()
    correct: boolean;
}

export type ExamType = 'ONLINE' | 'OFFLINE';

export class ProvaSchema {
    @IsString()
    @MaxLength(120)
    name: string;

    @IsString()
    @MaxLength(120)
    description: string;
}

export class QuestionSchema {
    @IsString()
    @MaxLength(255)
    statement: string;
}
  