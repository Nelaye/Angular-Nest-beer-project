import { BeerEntity } from "../../beer/entities/beer.entity";
export declare class UpdateUserDto {
    firstname: string;
    lastname: string;
    email?: string;
    beers: BeerEntity[];
}
