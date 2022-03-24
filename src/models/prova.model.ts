import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
  
@Entity()
export class Prova {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 120})
    name: string;

    @Column({ length: 120})
    description: string;

    type: ExamType;
    questions?: Question[];
}