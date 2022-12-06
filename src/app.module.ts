import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestModule } from './rest/rest.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://shaikasmazabi:<password>@cluster0.l5i1r6a.mongodb.net/?retryWrites=true&w=majority'), RestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
