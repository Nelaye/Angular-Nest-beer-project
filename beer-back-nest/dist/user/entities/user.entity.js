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
exports.UserEntity = void 0;
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const beer_entity_1 = require("../../beer/entities/beer.entity");
let UserEntity = class UserEntity {
    constructor(partial) {
        Object.assign(this, partial);
    }
};
__decorate([
    swagger_1.ApiProperty({
        name: "id",
        description: "Unique identifier in the database",
        example: "5fbbc1e428fddfcf2938b004"
    }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({
        name: "firstname",
        description: "Firstname of the user",
        example: "Maxime"
    }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], UserEntity.prototype, "firstname", void 0);
__decorate([
    swagger_1.ApiProperty({
        name: "lastname",
        description: "Lastname of the user",
        example: "Barbier"
    }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], UserEntity.prototype, "lastname", void 0);
__decorate([
    swagger_1.ApiProperty({
        name: "email",
        description: "Email of the user",
        example: "maxime.barbier@gmail.com"
    }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => String),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({
        name: "beers",
        description: "Beers possessed by the user",
    }),
    class_transformer_1.Expose(),
    class_transformer_1.Type(() => beer_entity_1.BeerEntity),
    __metadata("design:type", Array)
], UserEntity.prototype, "beers", void 0);
UserEntity = __decorate([
    class_transformer_1.Exclude(),
    __metadata("design:paramtypes", [Object])
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map