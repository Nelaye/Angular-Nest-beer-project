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
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const beer_schema_1 = require("../../beer/schemas/beer.schema");
let User = class User extends mongoose_1.Document {
};
__decorate([
    mongoose_2.Prop({
        type: String,
        required: true,
        trim: true
    }),
    __metadata("design:type", String)
], User.prototype, "firstname", void 0);
__decorate([
    mongoose_2.Prop({
        type: String,
        required: true,
        trim: true
    }),
    __metadata("design:type", String)
], User.prototype, "lastname", void 0);
__decorate([
    mongoose_2.Prop({
        type: String,
        required: true,
        trim: true
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    mongoose_2.Prop(beer_schema_1.BeerSchema),
    __metadata("design:type", String)
], User.prototype, "beers", void 0);
User = __decorate([
    mongoose_2.Schema({ toJSON: { virtuals: true }, versionKey: false })
], User);
exports.User = User;
exports.UserSchema = mongoose_2.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schema.js.map