import { Module } from '@nestjs/common';
import {BeerModule} from "./beer/beer.module";
import {MongooseModule, MongooseModuleOptions} from "@nestjs/mongoose";
import * as Config from 'config';

@Module({
  imports: [
      BeerModule,
      MongooseModule.forRoot(Config.get<string>('mongodb.uri'), Config.get<MongooseModuleOptions>('mongodb.options')),
  ],
})
export class AppModule {}
