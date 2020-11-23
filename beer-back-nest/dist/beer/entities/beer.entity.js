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
exports.BeerEntity = void 0;
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
let BeerEntity = class BeerEntity {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    swagger_1.ApiProperty({
        name: 'id',
        description: 'Unique identifier in the database',
        example: '243'
    }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], BeerEntity.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        name: 'name',
        description: 'Name of beer',
        example: 'Barbar'
    }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], BeerEntity.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({
        name: 'country',
        description: 'Origin country of beer',
        example: 'Belgique'
    }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], BeerEntity.prototype, "country", void 0);
__decorate([
    swagger_1.ApiProperty({
        name: 'brewery',
        description: 'Brewery of beer',
        example: 'Lefèbvre'
    }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], BeerEntity.prototype, "brewery", void 0);
__decorate([
    swagger_1.ApiProperty({
        name: 'degree',
        description: 'Degree of beer',
        example: 8
    }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], BeerEntity.prototype, "degree", void 0);
__decorate([
    swagger_1.ApiProperty({
        name: 'fermentation',
        description: 'Fermentation of beer',
        example: 'haute'
    }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], BeerEntity.prototype, "fermentation", void 0);
__decorate([
    swagger_1.ApiProperty({
        name: 'bitterness',
        description: 'Bitterness of beer',
        example: 1
    }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], BeerEntity.prototype, "bitterness", void 0);
__decorate([
    swagger_1.ApiProperty({
        name: 'thirst',
        description: 'Thirst of beer',
        example: 1.5
    }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => Number),
    __metadata("design:type", Number)
], BeerEntity.prototype, "thirst", void 0);
__decorate([
    swagger_1.ApiProperty({
        name: 'observation',
        description: 'Observation of beer',
        example: 'Bière au miel'
    }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], BeerEntity.prototype, "observation", void 0);
BeerEntity = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [Object])
], BeerEntity);
exports.BeerEntity = BeerEntity;
//# sourceMappingURL=beer.entity.js.map