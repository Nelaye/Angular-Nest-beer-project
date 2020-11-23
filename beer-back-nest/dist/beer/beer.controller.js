"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeerController = void 0;
const common_1 = require("@nestjs/common");
const beer_service_1 = require("./beer.service");
const beer_interceptor_1 = require("./interceptor/beer.interceptor");
const rxjs_1 = require("rxjs");
const create_beer_dto_1 = require("./dto/create-beer.dto");
const update_beer_dto_1 = require("./dto/update-beer.dto");
const handler_params_1 = require("./validators/handler-params");
const swagger_1 = require("@nestjs/swagger");
const beer_entity_1 = require("./entities/beer.entity");
let BeerController = class BeerController {
    constructor(_beerService) {
        this._beerService = _beerService;
    }
    findAll() {
        return this._beerService.findAll();
    }
    findRandom() {
        return this._beerService.findRandom();
    }
    findOne(params) {
        return this._beerService.findOne(params.id);
    }
    create(createBeerDto) {
        return this._beerService.create(createBeerDto);
    }
    update(params, updateBeerDto) {
        return this._beerService.update(params.id, updateBeerDto);
    }
    delete(params) {
        return this._beerService.delete(params.id);
    }
};
__decorate([
    swagger_1.ApiOkResponse({ description: 'Returns an array of beer', type: beer_entity_1.BeerEntity, isArray: true }),
    swagger_1.ApiNoContentResponse({ description: 'No beer exists in database' }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], BeerController.prototype, "findAll", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Returns one beer randomly', type: beer_entity_1.BeerEntity }),
    swagger_1.ApiNoContentResponse({ description: 'No beer exists in database' }),
    common_1.Get('random'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], BeerController.prototype, "findRandom", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'Return the beer for the given "id"', type: beer_entity_1.BeerEntity }),
    swagger_1.ApiNotFoundResponse({ description: 'Beer with the given "id" doesn\'t exist in the database' }),
    swagger_1.ApiBadRequestResponse({ description: 'Parameter provided is not good' }),
    swagger_1.ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' }),
    swagger_1.ApiParam({
        name: 'id',
        description: 'Unique identifier of the beer in the database',
        type: String,
        allowEmptyValue: false,
    }),
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [handler_params_1.HandlerParams]),
    __metadata("design:returntype", rxjs_1.Observable)
], BeerController.prototype, "findOne", null);
__decorate([
    swagger_1.ApiCreatedResponse({ description: 'The beer has been successfully creadted', type: beer_entity_1.BeerEntity }),
    swagger_1.ApiConflictResponse({ description: 'The beer already exists in the database' }),
    swagger_1.ApiBadRequestResponse({ description: 'Payload provided is not good' }),
    swagger_1.ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' }),
    swagger_1.ApiBody({ description: 'Payload to create a new beer', type: create_beer_dto_1.CreateBeerDto }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_beer_dto_1.CreateBeerDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], BeerController.prototype, "create", null);
__decorate([
    swagger_1.ApiOkResponse({ description: 'The beer has been successfully updated', type: beer_entity_1.BeerEntity }),
    swagger_1.ApiNotFoundResponse({ description: 'Beer with the given "id" doesn\'t exist in the database' }),
    swagger_1.ApiConflictResponse({ description: 'The beer already exists in the database' }),
    swagger_1.ApiBadRequestResponse({ description: 'Parameter and/or payload provided are not good' }),
    swagger_1.ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' }),
    swagger_1.ApiParam({
        name: 'id',
        description: 'Unique identifier of the beer in the database',
        type: String,
        allowEmptyValue: false
    }),
    swagger_1.ApiBody({ description: 'Payload to update a beer', type: update_beer_dto_1.UpdateBeerDto }),
    common_1.Put(':id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [handler_params_1.HandlerParams, update_beer_dto_1.UpdateBeerDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], BeerController.prototype, "update", null);
__decorate([
    swagger_1.ApiNoContentResponse({ description: 'The beer has been successfully deleted' }),
    swagger_1.ApiNotFoundResponse({ description: 'Beer with the given "id" doesn\'t exist in the database' }),
    swagger_1.ApiBadRequestResponse({ description: 'Parameter provided is not good' }),
    swagger_1.ApiUnprocessableEntityResponse({ description: 'The request can\'t be performed in the database' }),
    swagger_1.ApiParam({
        name: 'id',
        description: 'Unique identifier of the beer in the database',
        type: String,
        allowEmptyValue: false
    }),
    common_1.Delete(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [handler_params_1.HandlerParams]),
    __metadata("design:returntype", rxjs_1.Observable)
], BeerController.prototype, "delete", null);
BeerController = __decorate([
    swagger_1.ApiTags('beer'),
    common_1.Controller('beer'),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    common_1.UseInterceptors(beer_interceptor_1.BeerInterceptor),
    __metadata("design:paramtypes", [beer_service_1.BeerService])
], BeerController);
exports.BeerController = BeerController;
//# sourceMappingURL=beer.controller.js.map