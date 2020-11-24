import { BeerEntity } from "../../beer/entities/beer.entity";
export declare class CreateUserDto {
    firstname: string;
    lastname: string;
    email: string;
    beers: BeerEntity[];
}
