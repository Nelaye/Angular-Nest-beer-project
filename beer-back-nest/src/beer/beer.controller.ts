import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseInterceptors
} from '@nestjs/common';
import { BeerService } from "./beer.service";
import { BeerInterceptor } from "./interceptor/beer.interceptor";
import {Observable, of} from 'rxjs';
import { CreateBeerDto } from "./dto/create-beer.dto";
import { UpdateBeerDto } from "./dto/update-beer.dto";
import { HandlerParams } from "./validators/handler-params";
import {
    ApiBadRequestResponse,
    ApiBody,
    ApiConflictResponse,
    ApiCreatedResponse,
    ApiNoContentResponse,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiParam,
    ApiTags,
    ApiUnprocessableEntityResponse
} from "@nestjs/swagger";
import {BeerEntity} from "./entities/beer.entity";

@ApiTags('beer')
@Controller('beers' )
@UseInterceptors(ClassSerializerInterceptor)
@UseInterceptors(BeerInterceptor)
export class BeerController {

    /**
     * Class constructor
     * @param _beerService
     */
    constructor(private readonly _beerService: BeerService) {
    }

    /**
     * Handler to answer to GET /beer route
     *
     * @returns Observable<BeerEntity[] | void>
     */
    @ApiOkResponse({ description: 'Returns an array of beer', type: BeerEntity, isArray: true })
    @ApiNoContentResponse({ description: 'No beer exists in database' })
    @Get()
    findAll(): Observable<BeerEntity[] | void> {
        return this._beerService.findAll();
    }

    /**
     * Handler to answer to GET /beer/random route
     *
     * @returns Observable<BeerEntity | void>
     */
    @ApiOkResponse({ description: 'Returns one beer randomly', type: BeerEntity })
    @ApiNoContentResponse({ description: 'No beer exists in database' })
    @Get('random')
    findRandom(): Observable<BeerEntity | void> {
        return this._beerService.findRandom();
    }

    /**
     * Handler to answer to GET /beer/:id route
     *
     * @param {HandlerParams} params list of route params to take beer id
     * @returns Observable<BeerEntity>
     */
    @ApiOkResponse({ description: 'Return the beer for the given "id"', type: BeerEntity })
    @ApiNotFoundResponse({ description: 'Beer with the given "id" doesn\'t exist in the database' })
    @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
    @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
    @ApiParam({
        name: 'id',
        description: 'Unique identifier of the beer in the database',
        type: String,
        allowEmptyValue: false,
    })
    @Get(':id')
    findOne(@Param() params: HandlerParams): Observable<BeerEntity> {
        return this._beerService.findOne(params.id);
    }

    /**
     * Handler to answer to POST /beer route
     *
     * @param createBeerDto data to create
     * @returns Observable<BeerEntity>
     */
    @ApiCreatedResponse({ description: 'The beer has been successfully creadted', type: BeerEntity })
    @ApiConflictResponse({ description: 'The beer already exists in the database' })
    @ApiBadRequestResponse({ description: 'Payload provided is not good' })
    @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
    @ApiBody({ description: 'Payload to create a new beer', type: CreateBeerDto })
    @Post()
    create(@Body() createBeerDto: CreateBeerDto): Observable<BeerEntity> {
        return this._beerService.create(createBeerDto);
    }

    /**
     * Handler to answer to PUT /beer/:id route
     *
     * @param {HandlerParams} parames list of route params to take beer id
     * @param updateBeerDto data to update
     * @returns Observable<BeerEntity>
     */
    @ApiOkResponse({ description: 'The beer has been successfully updated', type: BeerEntity })
    @ApiNotFoundResponse({ description: 'Beer with the given "id" doesn\'t exist in the database' })
    @ApiConflictResponse({ description: 'The beer already exists in the database' })
    @ApiBadRequestResponse({ description: 'Parameter and/or payload provided are not good' })
    @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
    @ApiParam({
        name: 'id',
        description: 'Unique identifier of the beer in the database',
        type: String,
        allowEmptyValue: false
    })
    @ApiBody({ description:'Payload to update a beer', type: UpdateBeerDto })
    @Put(':id')
    update(@Param() params: HandlerParams, @Body() updateBeerDto: UpdateBeerDto): Observable<BeerEntity> {
        return this._beerService.update(params.id, updateBeerDto);
    }

    /**
     * Handler to answer to DELETE /beer/:id route
     *
     * @param {HandlerParams} params list of route params to take beer id
     * @returns Observable<void>
     */
    @ApiNoContentResponse({ description: 'The beer has been successfully deleted' })
    @ApiNotFoundResponse({ description:'Beer with the given "id" doesn\'t exist in the database' })
    @ApiBadRequestResponse({ description: 'Parameter provided is not good' })
    @ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' })
    @ApiParam({
        name: 'id',
        description: 'Unique identifier of the beer in the database',
        type: String,
        allowEmptyValue: false
    })
    @Delete(':id')
    delete(@Param() params: HandlerParams) : Observable<void> {
        return this._beerService.delete(params.id);
    }
}