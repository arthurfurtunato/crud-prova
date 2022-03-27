import { Module } from '@nestjs/common';
import { ExamModule } from './modules/exam.module';
import { TypeOrmModule} from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config';
import { ormConfig } from './database/config/database';

@Module({
  imports: [
    ExamModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormConfig())
  ],
})
export class AppModule {}