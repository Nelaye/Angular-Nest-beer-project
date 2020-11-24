import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {User} from "../schemas/user.schema";
import {Model, MongooseDocument} from "mongoose";
import {from, Observable} from "rxjs";
import {map} from "rxjs/operators";
import {CreateUserDto} from "../dto/create-user.dto";
import {UpdateUserDto} from "../dto/update-user.dto";

@Injectable()
export class UserDao {

    /**
     * Class constructor
     *
     * @param {Model<User>} _userModel instance of the model representing a User
     */
    constructor(@InjectModel(User.name) private readonly _userModel: Model<User>) {
    }

    /**
     * Call mongoose method, call toJSON on each result and returns User[] or undefined
     *
     * @return {Observable<User[] | void>}
     */
    find(): Observable<User[] | void> {
        return from(this._userModel.find({}))
            .pipe(
              map((docs: MongooseDocument[]) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined),
            );
    }

    /**
     * Returns one user of the list matching id in parameter
     *
     * @param  {string} id of the user in the db
     * @return {Observable<User | void>}
     */
    findById(id: string): Observable<User | void> {
        return from(this._userModel.findById(id))
            .pipe(
                map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
            );
    }

    /**
     * Check if user already exists with index and add it in user list
     *
     * @param {CreateUserDto} user to create
     * @return {Observable<User>}
     */
    save(user: CreateUserDto): Observable<User> {
        return from(new this._userModel(user).save()).pipe(
            map((doc: MongooseDocument) => doc.toJSON()),
        );
    }

    /**
     * Update an user in user list
     *
     * @param {string} id
     * @param {UpdateUserDto} user
     * @return {Observable<User | void>}
     */
    findByIdAndUpdate(id: string, user: UpdateUserDto): Observable<User | void> {
        return from(this._userModel.findByIdAndUpdate(id, user, {new: true, runValidators: true}))
            .pipe(
                map((doc: MongooseDocument) => !!doc ? doc.toJSON() : undefined),
            );
    }

    /**
     * Delete an user in user list
     *
     * @param {string} id
     * @return {Observable<User | void>}
     */
    findByIdAndRemove(id: string): Observable<User | void> {
        return from(this._userModel.findByIdAndRemove(id))
            .pipe(
                map((doc: MongooseDocument) => !!doc ? doc.toJSON : undefined),
            );
    }
}