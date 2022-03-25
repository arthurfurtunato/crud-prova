 import { Column, Entity, JoinColumn, JoinTable, OneToMany, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

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

    @OneToMany(type => Question, question => question.prova)
    @JoinColumn()
    questions?: Question[];
}

@Entity()
export class Question {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    statement: string;

    @OneToMany(type => Option, option => option.question)
    @JoinColumn()
    options: Option[];

    @ManyToOne(type => Prova, prova => prova.questions)
    prova: Prova;
}

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

    @ManyToOne(type => Question, question => question.options)
    question: Question;
}