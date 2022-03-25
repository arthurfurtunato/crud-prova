 import { Column, Entity, JoinColumn, JoinTable, OneToMany, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

export type ExamType = 'ONLINE' | 'OFFLINE';
  
@Entity()
export class Exam{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 120})
    name: string;

    @Column({ length: 120})
    description: string;

    @Column()
    type: ExamType;

    @OneToMany(type => Question, question => question.exam)
    @JoinColumn()
    questions?: Question[];
}

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    statement: string;

    @OneToMany(type => Option, option => option.question)
    @JoinColumn()
    options: Option[];

    @ManyToOne(type => Exam, exam => exam.questions)
    exam: Exam;
}

@Entity()
export class Option {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    key: string;

    @Column()
    value: string;

    @Column()
    correct: boolean;

    @ManyToOne(type => Question, question => question.options)
    question: Question;
}