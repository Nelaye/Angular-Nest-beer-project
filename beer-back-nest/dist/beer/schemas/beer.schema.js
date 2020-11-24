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
exports.BeerSchema = exports.Beer = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let Beer = class Beer extends mongoose_1.Document {
};
__decorate([
    mongoose_2.Prop({
        type: String,
        required: true,
        trim: true,
    }),
    __metadata("design:type", String)
], Beer.prototype, "name", void 0);
__decorate([
    mongoose_2.Prop({
        type: String,
        required: false,
        trim: true,
    }),
    __metadata("design:type", String)
], Beer.prototype, "country", void 0);
__decorate([
    mongoose_2.Prop({
        type: String,
        required: false,
        trim: true,
    }),
    __metadata("design:type", String)
], Beer.prototype, "brewery", void 0);
__decorate([
    mongoose_2.Prop({
        type: Number,
        required: true,
        min: 0,
        max: 100,
    }),
    __metadata("design:type", Number)
], Beer.prototype, "degree", void 0);
__decorate([
    mongoose_2.Prop({
        type: String,
        required: false,
        trim: true,
    }),
    __metadata("design:type", String)
], Beer.prototype, "fermentation", void 0);
__decorate([
    mongoose_2.Prop({
        type: Number,
        required: false,
        min: 0.0,
        max: 2.0,
    }),
    __metadata("design:type", Number)
], Beer.prototype, "bitterness", void 0);
__decorate([
    mongoose_2.Prop({
        type: Number,
        required: false,
        min: 0.0,
        max: 2.0
    }),
    __metadata("design:type", Number)
], Beer.prototype, "thirst", void 0);
__decorate([
    mongoose_2.Prop({
        type: String,
        required: false,
        trim: true,
    }),
    __metadata("design:type", String)
], Beer.prototype, "observation", void 0);
Beer = __decorate([
    mongoose_2.Schema({ toJSON: { virtuals: true }, versionKey: false })
], Beer);
exports.Beer = Beer;
exports.BeerSchema = mongoose_2.SchemaFactory.createForClass(Beer);
//# sourceMappingURL=beer.schema.js.map