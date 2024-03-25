import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './students/module/student.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017'), StudentModule], 
  controllers: [AppController],
  providers: [AppService] 
})
export class AppModule { }
