import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'; 
import { ProvasModule } from './provas/provas.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ProvasModule],
})
export class AppModule {}
