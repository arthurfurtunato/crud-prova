import { Module } from '@nestjs/common';
import { ExamModule } from './modules/exam.module';
import { TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [ExamModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
