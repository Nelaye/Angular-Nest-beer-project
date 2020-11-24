import { Document } from 'mongoose';
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {BeerSchema} from "../../beer/schemas/beer.schema";

@Schema({toJSON: { virtuals: true }, versionKey: false })
export class User extends Document {
    @Prop({
        type: String,
        required: true,
        trim: true
    })
    firstname: string;

    @Prop({
        type: String,
        required: true,
        trim: true
    })
    lastname: string;

    @Prop({
        type: String,
        required: true,
        trim: true
    })
    email: string;

    @Prop(BeerSchema)
    beers: string;
}

export const UserSchema = SchemaFactory.createForClass(User);