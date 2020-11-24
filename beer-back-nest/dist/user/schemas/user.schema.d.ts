import { Document } from 'mongoose';
export declare class User extends Document {
    firstname: string;
    lastname: string;
    email: string;
    beers: string;
}
export declare const UserSchema: any;
