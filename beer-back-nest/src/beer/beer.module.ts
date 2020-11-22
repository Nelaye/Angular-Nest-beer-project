import { Logger, Module } from '@nestjs/common';
import { BeerController } from './beer.controller';
import { BeerService } from './beer.service';
import { Beer, BeerSchema } from './schemas/beer.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { BeerDao } from './dao/beer.dao';

@Module({
    imports: [ MongooseModule.forFeature( [ { name: Beer.name, schema: BeerSchema } ]) ],
    controllers [ BeerController ],
    providers: [ BeerService, Logger, BeerDao ],
})
export class BeerModule {}
