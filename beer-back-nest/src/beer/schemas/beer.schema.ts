import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ toJSON: { virtuals: true }, versionKey: false })
export class Beer extends Document {
    @Prop({
        type: String,
        required: true,
        trim: true,
    })
    name: string;

    @Prop({
        type: String,
        required: true,
        trim: true,
    })
    country: string;

    @Prop({
        type: String,
        required: true,
        trim: true,
    })
    brewery: string;

    @Prop({
        type: Number,
        required: true,
        min: 0,
        max: 100,
    })
    degree: number

    @Prop({
        type: String,
        required: true,
        trim: true,
    })
    fermentation: string;

    @Prop({
        type: Number,
        required: true,
        min: 0.0,
        max: 2.0,
    })
    bitterness: number;

    @Prop({
        type: Number,
        required: true,
        min: 0.0,
        max: 2.0
    })
    thirst: number;

    @Prop({
        type: String,
        required: true,
        trim: true,
    })
    observation: string;
}

export const BeerSchema = SchemaFactory.createForClass(Beer);