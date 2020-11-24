import { User } from "../schemas/user.schema";
import { Model } from "mongoose";
import { Observable } from "rxjs";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
export declare class UserDao {
    private readonly _userModel;
    constructor(_userModel: Model<User>);
    find(): Observable<User[] | void>;
    findById(id: string): Observable<User | void>;
    save(user: CreateUserDto): Observable<User>;
    findByIdAndUpdate(id: string, user: UpdateUserDto): Observable<User | void>;
    findByIdAndRemove(id: string): Observable<User | void>;
}
