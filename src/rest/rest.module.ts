import { Module } from '@nestjs/common';
import { RestService } from './rest.service';
import { RestController } from './rest.controller';
import {MongooseModule} from '@nestjs/mongoose';
import { RestSchema } from './rest.schema';
@Module({
  imports:[MongooseModule.forFeature([{ name : 'rest', schema: RestSchema}])],
  providers: [RestService],
  controllers: [RestController]
})
export class RestModule {}
