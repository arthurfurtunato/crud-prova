import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OptionController, ExamController, QuestionController } from "src/controllers/exam.controller";
import { Exam, Option, Question } from "src/models/prova.model";

@Module({
    imports: [TypeOrmModule.forFeature([Exam, Question, Option])],
    controllers: [ExamController, QuestionController, OptionController]
})

export class ProvaModule {}