import { BeerEntity } from "../../beer/entities/beer.entity";
export declare class UserEntity {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    beers: BeerEntity[];
    constructor(partial: Partial<UserEntity>);
}
