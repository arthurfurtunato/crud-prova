import { Module } from '@nestjs/common';
import { ProvaModule } from './modules/prova.module';

@Module({
  imports: [ProvaModule],
})
export class AppModule {}
