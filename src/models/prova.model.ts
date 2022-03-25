import { Column, Entity, PrimaryGeneratedColumn, TableForeignKey } from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";

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

    @Column()
    type: ExamType;
    questions?: Question[];
}