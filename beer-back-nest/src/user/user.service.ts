import {Injectable} from "@nestjs/common";
import {UserDao} from "./dao/user.dao";
import {Observable} from "rxjs";
import {UserEntity} from "./entities/user.entity";
import {map} from "rxjs/operators";

@Injectable()
export class UserService {

    /**
     * Class constructor
     *
     * @param {UserDao} _userDao instance of the DAO
     */
    constructor(private readonly _userDao: UserDao) {
    }

    /**
     * Returns all existing user in the list
     *
     * @returns {Observable<UserEntity[] | void>}
     */
    /*
    findAll(): Observable<UserEntity[] | void> {
        return this._userDao.find().pipe(
            map(_ => !!_ ? _.map(__ => new UserEntity(__)) : undefined),
        );
    }
     */

    /**
     * Returns randomly one user of the list
     *
     * @returns {Observable<UserEntity | void>}
     */
    /*
    findRandom(): Observable<UserEntity | void> {
        return this._userDao.find().pipe(
            map(_ => !!_ ? _[ Math.round(Math.random() * _.length) ] : undefined),
            map(_ => !!_ ? new UserEntity(_) : undefined),
        );
    }
     */

}