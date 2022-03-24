import { Module } from '@nestjs/common';
import { ProvasController } from './provas.controller';
import { ProvasService } from './shared/provas.service';


@Module({
    controllers: [ProvasController],
    providers: [ProvasService]
})
export class ProvasModule {}
