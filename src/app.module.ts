import { Module } from '@nestjs/common';
import { ProvaModule } from './modules/prova.module';
import { TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [ProvaModule, TypeOrmModule.forRoot()],
})
export class AppModule {}
