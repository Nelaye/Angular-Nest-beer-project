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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeerService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const beer_entity_1 = require("./entities/beer.entity");
const beer_dao_1 = require("./dao/beer.dao");
let BeerService = class BeerService {
    constructor(_beerDao) {
        this._beerDao = _beerDao;
    }
    findAll() {
        return this._beerDao.find().pipe(operators_1.map(_ => !!_ ? _.map(__ => new beer_entity_1.BeerEntity(__)) : undefined));
    }
    findRandom() {
        return this._beerDao.find().pipe(operators_1.map(_ => !!_ ? _[Math.round(Math.random() * _.length)] : undefined), operators_1.map(_ => !!_ ? new beer_entity_1.BeerEntity(_) : undefined));
    }
    findOne(id) {
        return this._beerDao.findById(id).pipe(operators_1.catchError(e => rxjs_1.throwError(new common_1.UnprocessableEntityException(e.message))), operators_1.mergeMap(_ => !!_ ?
            rxjs_1.of(new beer_entity_1.BeerEntity(_)) : rxjs_1.throwError(new common_1.NotFoundException(`Beer with id '${id}' not found`))));
    }
    create(beer) {
        return this._addBeer(beer)
            .pipe(operators_1.mergeMap(_ => this._beerDao.save(_)), operators_1.catchError(e => e.code === 11000 ?
            rxjs_1.throwError(new common_1.ConflictException(`Beer with name '${beer.name}' already exists`)) :
            rxjs_1.throwError(new common_1.UnprocessableEntityException(e.message))), operators_1.map(_ => new beer_entity_1.BeerEntity(_)));
    }
    update(id, beer) {
        return this._beerDao.findByIdAndUpdate(id, beer)
            .pipe(operators_1.catchError(e => e.code === 11000 ?
            rxjs_1.throwError(new common_1.ConflictException(`Beer with name '${beer.name}' already exists`)) :
            rxjs_1.throwError(new common_1.UnprocessableEntityException(e.message))), operators_1.mergeMap(_ => !!_ ?
            rxjs_1.of(new beer_entity_1.BeerEntity(_)) :
            rxjs_1.throwError(new common_1.NotFoundException(`Beer with id '${id}' not found`))));
    }
    delete(id) {
        return this._beerDao.findByIdAndRemove(id)
            .pipe(operators_1.catchError(e => rxjs_1.throwError(new common_1.UnprocessableEntityException(e.message))), operators_1.mergeMap(_ => !!_ ?
            rxjs_1.of(undefined) :
            rxjs_1.throwError(new common_1.NotFoundException(`Beer with id '${id}' not found`))));
    }
    _addBeer(beer) {
        return rxjs_1.of(beer)
            .pipe(operators_1.map(_ => Object.assign(_, {})));
    }
};
BeerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [beer_dao_1.BeerDao])
], BeerService);
exports.BeerService = BeerService;
//# sourceMappingURL=beer.service.js.map