import { Module } from "@nestjs/common";
import { ProvaController } from "src/controllers/prova.controller";

@Module({
    controllers: [ProvaController]
})

export class ProvaModule {}