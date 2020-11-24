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
exports.UserDao = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../schemas/user.schema");
const mongoose_2 = require("mongoose");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let UserDao = class UserDao {
    constructor(_userModel) {
        this._userModel = _userModel;
    }
    find() {
        return rxjs_1.from(this._userModel.find({}))
            .pipe(operators_1.map((docs) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined));
    }
    findById(id) {
        return rxjs_1.from(this._userModel.findById(id))
            .pipe(operators_1.map((doc) => !!doc ? doc.toJSON() : undefined));
    }
    save(user) {
        return rxjs_1.from(new this._userModel(user).save()).pipe(operators_1.map((doc) => doc.toJSON()));
    }
    findByIdAndUpdate(id, user) {
        return rxjs_1.from(this._userModel.findByIdAndUpdate(id, user, { new: true, runValidators: true }))
            .pipe(operators_1.map((doc) => !!doc ? doc.toJSON() : undefined));
    }
    findByIdAndRemove(id) {
        return rxjs_1.from(this._userModel.findByIdAndRemove(id))
            .pipe(operators_1.map((doc) => !!doc ? doc.toJSON : undefined));
    }
};
UserDao = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(user_schema_1.User.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UserDao);
exports.UserDao = UserDao;
//# sourceMappingURL=user.dao.js.map