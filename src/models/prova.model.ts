 import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
//  import { Question } from "./questions.models";

@Entity()
export class Option {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    key: string;

    @Column()
    value: string;

    @Column()
    correct: boolean;

    // @ManyToOne(() => Question, (question: Question) => question.options)
    // question: Question;
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

    @OneToMany(type => Question, question => question.id)
    @JoinColumn()
    questions?: Question[];
}

@Entity()
export class Question {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    statement: string;

    @OneToMany(() => Option, (option: Option) => option.id)
    @JoinColumn()
    options: Option[];

    @ManyToOne(type => Prova, prova => prova.id)
    prova: Prova;
}