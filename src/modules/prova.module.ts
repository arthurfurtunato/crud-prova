import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProvaController } from "src/controllers/prova.controller";
import { Prova } from "src/models/prova.model";

@Module({
    imports: [TypeOrmModule.forFeature([Prova])],
    controllers: [ProvaController]
})

export class ProvaModule {}