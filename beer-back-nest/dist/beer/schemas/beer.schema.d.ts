import { Document } from 'mongoose';
export declare class Beer extends Document {
    name: string;
    country: string;
    brewery: string;
    degree: number;
    fermentation: string;
    bitterness: number;
    thirst: number;
    observation: string;
}
export declare const BeerSchema: any;
