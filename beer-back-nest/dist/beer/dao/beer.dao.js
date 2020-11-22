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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeerDao = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const beer_schema_1 = require("../schemas/beer.schema");
const mongoose_2 = require("@nestjs/mongoose");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let BeerDao = class BeerDao {
    constructor(_beerModel) {
        this._beerModel = _beerModel;
    }
    find() {
        return rxjs_1.from(this._beerModel.find({}))
            .pipe(operators_1.map((docs) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined));
    }
    findById(id) {
        return rxjs_1.from(this._beerModel.findById(id))
            .pipe(operators_1.map((doc) => !!doc ? doc.toJSON() : undefined));
    }
    save(beer) {
        return rxjs_1.from(new this._beerModel(beer).save())
            .pipe(operators_1.map((doc) => doc.toJSON()));
    }
    findByIdAndUpdate(id, beer) {
        return rxjs_1.from(this._beerModel.findByIdAndUpdate(id, beer, { new: true, runValisators: true }))
            .pipe(operators_1.map((doc) => !!doc ? doc.toJSON() : undefined));
    }
    findByIdAndRemove(id) {
        return rxjs_1.from(this._beerModel.findByIdAndRemove(id))
            .pipe(operators_1.map((doc) => !!doc ? doc.toJSON : undefined));
    }
};
BeerDao = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(beer_schema_1.Beer.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], BeerDao);
exports.BeerDao = BeerDao;
//# sourceMappingURL=beer.dao.js.map