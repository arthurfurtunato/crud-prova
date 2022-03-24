import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvasController } from './provas/provas.controller';
import { ProvasService } from './provas/shared/provas.service';
import { ProvasModule } from './provas/provas.module';

@Module({
  controllers: [AppController, ProvasController],
  providers: [AppService, ProvasService],
  imports: [ProvasModule],
})
export class AppModule {}
