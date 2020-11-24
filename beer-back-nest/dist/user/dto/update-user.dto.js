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
exports.UpdateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const update_beer_dto_1 = require("../../beer/dto/update-beer.dto");
class UpdateUserDto {
}
__decorate([
    swagger_1.ApiProperty({
        name: "firstname",
        description: "Firstname of the user",
        example: "Maxime"
    }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "firstname", void 0);
__decorate([
    swagger_1.ApiProperty({
        name: "lastname",
        description: "Lastname of the user",
        example: "Barbier"
    }),
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "lastname", void 0);
__decorate([
    swagger_1.ApiProperty({
        name: "email",
        description: "Email of the user",
        example: "maxime.barbier@gmail.com"
    }),
    class_validator_1.IsEmail(),
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], UpdateUserDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({
        name: "beers",
        description: "Beers possessed by the user"
    }),
    class_validator_1.IsInstance(update_beer_dto_1.UpdateBeerDto),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => update_beer_dto_1.UpdateBeerDto),
    __metadata("design:type", Array)
], UpdateUserDto.prototype, "beers", void 0);
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update-user.dto.js.map