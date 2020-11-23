"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeerModule = void 0;
const common_1 = require("@nestjs/common");
const beer_controller_1 = require("./beer.controller");
const beer_service_1 = require("./beer.service");
const beer_schema_1 = require("./schemas/beer.schema");
const mongoose_1 = require("@nestjs/mongoose");
const beer_dao_1 = require("./dao/beer.dao");
let BeerModule = class BeerModule {
};
BeerModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: beer_schema_1.Beer.name, schema: beer_schema_1.BeerSchema }])],
        controllers: [beer_controller_1.BeerController],
        providers: [beer_service_1.BeerService, common_1.Logger, beer_dao_1.BeerDao],
    })
], BeerModule);
exports.BeerModule = BeerModule;
//# sourceMappingURL=beer.module.js.map