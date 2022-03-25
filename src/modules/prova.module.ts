import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProvaController, QuestionController } from "src/controllers/prova.controller";
import { Prova, Option, Question } from "src/models/prova.model";

@Module({
    imports: [TypeOrmModule.forFeature([Prova, Question, Option])],
    controllers: [ProvaController, QuestionController]
})

export class ProvaModule {}