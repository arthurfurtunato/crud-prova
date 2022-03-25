import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Prova, Option } from "./prova.model";

@Entity()
export class Question {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    statement: string;

    @OneToMany(() => Option, (option: Option) => option.id)
    @JoinColumn()
    options: Option[];

    @ManyToOne(() => Prova, (prova: Prova) => prova.questions)
    prova: Prova;
}